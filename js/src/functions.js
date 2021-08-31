const Formats = {
    formatTitleCase(str) {
		return str
			.toLowerCase()
			.split(" ")
			.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1) })
			.join(" ")
    },
    formatMoney(money) {
		return currency(money, { formatWithSymbol: true, symbol: "$", separator: ",", decimal: ".", precision: 2 }).format()
	},
	unformatMoney(money) {
		return currency(money, { formatWithSymbol: true, symbol: "$", separator: ",", decimal: ".", precision: 2 }).value;
    },
	formatNumber(number) {
		if(isNaN(Number(number))) {return Number(0)}
		else {return Number(number)}
	},
	unformatNumber(number) {
		return currency(number, { formatWithSymbol: false, separator: ",", decimal: "."}).value
	},
	formatDate(date) { return moment(this.unformatDate(date)).format("DD/MM/YYYY") },
	letterDate(date) { return moment(this.unformatDate(date)).format("D MMMM YYYY")},
	unformatDate(date) { return moment(date, ["DDMMYYYY", "DDMMYY", "DDMM", "DD"]) },
	formatDecimal(money) {
		return currency(money, { formatWithSymbol: false, symbol: "$", separator: ",", decimal: ".", precision: 2 }).format()
	},
	unformatDecimal(money) {
		return currency(money, { formatWithSymbol: false, symbol: "$", separator: ",", decimal: ".", precision: 2 }).value;
	},
	isInArray(needle, haystack) {
		var length = haystack.length
		for (var i = 0; i < length; i++) {
			if (haystack[i] === needle) { return true }
		} return false
	},
	table_date(table, date) {
		data = 0
		date = Formats.unformatDate(date)
		for (i = 0; i < table.length; i++) {
			if ( date >= Formats.unformatDate(table[i].start_date) ) {
				if ( date > Formats.unformatDate(table[i].end_date) ) { data = 0 }
				else { data = table[i].amount }
			}
		}

		return data
	},
}
const Functions = {
	frequencyConvert(amount, inFrequency, outFrequency) {
		switch(inFrequency){
			case 0:
				annual = 1/364
				break;
			case 1:
				annual = 1/52
				break;
			case 2:
				annual = 1/26
				break;
			case 3:
				annual = 1/12
				break;
			case 4:
				annual = 1/13
				break;
			case 5:
				annual = 1/6
				break;
			case 6:
				annual = 1/4
				break;
			case 7:
				annual = 1/3
				break;
			case 8:
				annual = 1/2
				break;
			case 9:
				annual = 1
		}
		switch(outFrequency){
			case 0:
				divisor = 364
				break;
			case 1:
				divisor = 52
				break;
			case 2:
				divisor = 26
				break;
			case 3:
				divisor = 12
				break;
			case 4:
				divisor = 13
				break;
			case 5:
				divisor = 6
				break;
			case 6:
				divisor = 4
				break;
			case 7:
				divisor = 3
				break;
			case 8:
				divisor = 2
				break;
			case 9:
				divisor = 1
		}
		if (amount == 0) { return 0 }
		return Math.round(((amount / annual) / divisor) * 100) / 100
	},
}
const Calculations = {
	//Tax Calculations
		tax_calculator(entitlement_date, gross, taxCode, ACC, kiwisaver, frequency) {

			tax = 0
			//Convert gross to annual
				annualGross = Functions.frequencyConvert(gross, frequency, 9)

			//PAYE
				//Build tax brackets array
					taxArrays = dataIRD.tax_rates.taxBrackets
					brackets = []
					for(var i in taxArrays) {
						//Skips tax rates below secondary tax rate start-points
						if(taxArrays[i].bottom >= dataIRD.tax_rates.taxCodes[taxCode].start) {
							//Adds each bracket that is below the gross amount to the brackets array
							if(gross >= taxArrays[i].bottom) {
								if(dataIRD.tax_rates.taxCodes[taxCode].increments == true) {amount = taxArrays[i].top}
								else{amount = Number.POSITIVE_INFINITY}

								rate = Formats.table_date(taxArrays[i].rates, entitlement_date)

								brackets.push({amount: amount, rate: rate})

								if(gross < taxArrays[i].top) {break;}
							}
						}

						//If a tax bracket has been added, and the tax code does not incremetn (remains flat rate), exit for loop
						if(brackets.length > 0 && dataIRD.tax_rates.taxCodes[taxCode].increments == false) {break;}
					}

				tax = tax + Calculations.paye(gross, brackets)

			//ACC
				if(ACC == true) {tax = tax + Calculations.ACC(entitlement_date, gross, taxCode)}

			//Student Loan
				if(dataIRD.tax_rates.taxCodes[taxCode].loan == true) {tax = tax + Calculations.studentLoan(entitlement_date, gross)}

			//Kiwisaver
				tax = tax + (gross * kiwisaver)

			//Independent Earner Tax Credit

			return Functions.frequencyConvert(tax, 9, frequency)

		},

		paye(gross, brackets) {
			paye = 0
			previousBracket = 0
			var bracket;
			for (bracket = 0; bracket < brackets.length; bracket++) {
				if(gross < brackets[bracket].amount) {
					paye = paye + ((gross - previousBracket) * brackets[bracket].rate)
					break;
				}
				else {
					paye = paye + ((brackets[bracket].amount - previousBracket) * brackets[bracket].rate)
				}
				previousBracket = brackets[bracket].amount
			}
			return paye
		},

		ACC(entitlement_date, gross, taxCode) {
			accRate = Formats.table_date(dataIRD.tax_rates.ACC, entitlement_date)
			maxACC = Formats.table_date(dataIRD.tax_rates.maxACC, entitlement_date)

			//Secondary tax codes ignore max ACC earner's levy payable.
			if(gross > maxACC && (taxCode == "M" || taxCode == "M_SL" || taxCode == "ME" || taxCode == "ME_SL")) {
				return maxACC * accRate
			}
			else {
				return gross * accRate
			}
		},

		studentLoan(entitlement_date, gross) {
			rate = Formats.table_date(dataIRD.studentLoan.SL.repayment_rate, entitlement_date)
			threshold = Formats.table_date(dataIRD.studentLoan.SL.repayment_threshold, entitlement_date)

			if (gross > threshold) {
				return (gross - threshold) * rate
			}
			else {return 0}
		},

		IETC(gross) {

		},
}