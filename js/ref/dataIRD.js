const dataIRD = {
	WFF_rates: {
		FTC: {
			First_015: [
				{start_date: "01/01/1998", end_date: "31/03/2005", amount: 2444.00},
				{start_date: "01/04/2005", end_date: "31/03/2007", amount: 3744.00},
				{start_date: "01/04/2007", end_date: "30/09/2008", amount: 4264.00},
				{start_date: "01/10/2008", end_date: "26/09/2010", amount: 4487.00},
				{start_date: "27/09/2010", end_date: "31/03/2012", amount: 4578.00},
				{start_date: "01/04/2012", end_date: "30/06/2018", amount: 4822.00},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 5878.00},
			],
			First_16: [
				{start_date: "01/01/1998", end_date: "31/03/2005", amount: 3120.00},
				{start_date: "01/04/2005", end_date: "31/03/2007", amount: 4420.00},
				{start_date: "01/04/2007", end_date: "30/09/2008", amount: 4940.00},
				{start_date: "01/10/2008", end_date: "26/09/2010", amount: 5198.00},
				{start_date: "27/09/2010", end_date: "30/06/2018", amount: 5303.00},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 5878.00},
			],
			Sub_012: [
				{start_date: "01/01/1998", end_date: "31/03/2005", amount: 1664.00},
				{start_date: "01/04/2005", end_date: "31/03/2007", amount: 2444.00},
				{start_date: "01/04/2007", end_date: "30/09/2008", amount: 2964.00},
				{start_date: "01/10/2008", end_date: "26/09/2010", amount: 3119.00},
				{start_date: "27/09/2010", end_date: "31/03/2012", amount: 3182.00},
				{start_date: "01/04/2012", end_date: "30/06/2018", amount: 3351.00},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 4745.00},
			],
			Sub_1315: [
				{start_date: "01/01/1998", end_date: "31/03/2005", amount: 2080.00},
				{start_date: "01/04/2005", end_date: "31/03/2007", amount: 2860.00},
				{start_date: "01/04/2007", end_date: "30/09/2008", amount: 3380.00},
				{start_date: "01/10/2008", end_date: "26/09/2010", amount: 3557.00},
				{start_date: "27/09/2010", end_date: "31/03/2012", amount: 3629.00},
				{start_date: "01/04/2012", end_date: "30/06/2018", amount: 3822.00},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 4745.00},
			],
			Sub_16: [
				{start_date: "01/01/1998", end_date: "31/03/2005", amount: 2600.00},
				{start_date: "01/04/2005", end_date: "31/03/2007", amount: 3900.00},
				{start_date: "01/04/2007", end_date: "30/09/2008", amount: 4420.00},
				{start_date: "01/10/2008", end_date: "26/09/2010", amount: 4651.00},
				{start_date: "27/09/2010", end_date: "31/03/2022", amount: 4745.00},
			]
		},
		IWTC: {
			IWTCA: [
				{start_date: "01/11/2007", end_date: "31/03/2022", amount: 3120.00},
			],
			IWTCB: [
				{start_date: "01/11/2007", end_date: "31/03/2022", amount: 780.00},
			]
		},
		BSTC: [
			{start_date: "01/07/2018", end_date: "31/03/2022", amount: 60.00},
		],
	},
    studentLoan: {
		SL: {
			repayment_rate: [
				{start_date: "01/04/1998", end_date: "31/03/2013", amount: 0.10},
				{start_date: "01/04/2013", end_date: "31/03/2022", amount: 0.12},
			],
			repayment_threshold: [
				{start_date: "01/04/1998", end_date: "31/03/2000", amount: 14716.00},
				{start_date: "01/04/2000", end_date: "31/03/2001", amount: 14768.00},
				{start_date: "01/04/2001", end_date: "31/03/2002", amount: 15132.00},
				{start_date: "01/04/2002", end_date: "31/03/2003", amount: 15496.00},
				{start_date: "01/04/2003", end_date: "31/03/2004", amount: 15964.00},
				{start_date: "01/04/2004", end_date: "31/03/2005", amount: 16172.00},
				{start_date: "01/04/2005", end_date: "31/03/2006", amount: 16588.00},
				{start_date: "01/04/2006", end_date: "31/03/2007", amount: 17160.00},
				{start_date: "01/04/2007", end_date: "31/03/2008", amount: 17784.00},
				{start_date: "01/04/2008", end_date: "31/03/2009", amount: 18148.00},
				{start_date: "01/04/2009", end_date: "31/03/2017", amount: 19084.00},
				{start_date: "01/04/2017", end_date: "31/03/2018", amount: 19136.00},
				{start_date: "01/04/2018", end_date: "31/03/2019", amount: 19448.00},
				{start_date: "01/04/2019", end_date: "31/03/2020", amount: 19760.00},
				{start_date: "01/04/2020", end_date: "31/03/2021", amount: 20020.00},
				{start_date: "01/04/2021", end_date: "31/03/2022", amount: 20280.00},
			]
		}
	},
	tax_rates: {
		ACC: [
			{start_date: "01/04/2000", end_date: "31/03/2001", amount: 0.0130},
			{start_date: "01/04/2001", end_date: "31/03/2002", amount: 0.0110},
			{start_date: "01/04/2002", end_date: "31/03/2006", amount: 0.0120},
			{start_date: "01/04/2006", end_date: "31/03/2008", amount: 0.0130},
			{start_date: "01/04/2008", end_date: "31/03/2009", amount: 0.0140},
			{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.0170},
			{start_date: "01/04/2010", end_date: "26/09/2010", amount: 0.0200},
			{start_date: "27/09/2010", end_date: "31/03/2012", amount: 0.0204},
			{start_date: "01/04/2012", end_date: "31/03/2014", amount: 0.0170},
			{start_date: "01/04/2014", end_date: "31/03/2016", amount: 0.0145},
			{start_date: "01/04/2016", end_date: "31/03/2022", amount: 0.0139},
		],
		maxACC: [
			{start_date: "01/04/2000", end_date: "31/03/2001", amount: 84636.00},
			{start_date: "01/04/2001", end_date: "31/03/2002", amount: 85795.00},
			{start_date: "01/04/2002", end_date: "31/03/2003", amount: 87185.00},
			{start_date: "01/04/2003", end_date: "31/03/2004", amount: 88728.00},
			{start_date: "01/04/2004", end_date: "31/03/2005", amount: 92189.00},
			{start_date: "01/04/2005", end_date: "31/03/2006", amount: 94226.00},
			{start_date: "01/04/2006", end_date: "31/03/2007", amount: 96619.00},
			{start_date: "01/04/2007", end_date: "31/03/2008", amount: 99817.00},
			{start_date: "01/04/2008", end_date: "31/03/2009", amount: 102922.00},
			{start_date: "01/04/2009", end_date: "31/03/2010", amount: 106473.00},
			{start_date: "01/04/2010", end_date: "31/03/2011", amount: 110018.00},
			{start_date: "01/04/2011", end_date: "31/03/2012", amount: 111669.00},
			{start_date: "01/04/2012", end_date: "31/03/2013", amount: 113768.00},
			{start_date: "01/04/2013", end_date: "31/03/2014", amount: 116089.00},
			{start_date: "01/04/2014", end_date: "31/03/2015", amount: 118191.00},
			{start_date: "01/04/2015", end_date: "31/03/2016", amount: 120070.00},
			{start_date: "01/04/2016", end_date: "31/03/2017", amount: 122063.00},
			{start_date: "01/04/2017", end_date: "31/03/2018", amount: 124053.00},
			{start_date: "01/04/2018", end_date: "31/03/2019", amount: 126286.00},
			{start_date: "01/04/2019", end_date: "31/03/2020", amount: 128470.00},
			{start_date: "01/04/2020", end_date: "31/03/2022", amount: 130911.00}
		],
		taxBrackets: {
			bracket_1: {
				bottom: 0,
				top: 9500,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2008", amount: 0.1950},
					{start_date: "01/04/2008", end_date: "31/03/2009", amount: 0.1375},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.1250},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.1150},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.1050},
				]
			},
			bracket_2: {
				bottom: 9500,
				top: 14000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2008", amount: 0.1950},
					{start_date: "01/04/2008", end_date: "31/03/2009", amount: 0.1675},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.1250},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.1150},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.1050},
				]
			},
			bracket_3: {
				bottom: 14000,
				top: 38000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2008", amount: 0.1950},
					{start_date: "01/04/2008", end_date: "31/03/2010", amount: 0.2100},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.1925},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.1750},
				]
			},
			bracket_4: {
				bottom: 38000,
				top: 40000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2008", amount: 0.3300},
					{start_date: "01/04/2008", end_date: "31/03/2009", amount: 0.2700},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.2100},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.1925},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.1750},
				]
			},
			bracket_5: {
				bottom: 40000,
				top: 48000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2009", amount: 0.3300},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.2100},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.1925},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.1750},
				]
			},
			bracket_6: {
				bottom: 48000,
				top: 60000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2010", amount: 0.3300},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.3150},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.3000},
				]
			},
			bracket_7: {
				bottom: 60000,
				top: 70000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2008", amount: 0.3900},
					{start_date: "01/04/2008", end_date: "31/03/2009", amount: 0.3600},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.3300},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.3150},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.3000},
				]
			},
			bracket_8: {
				bottom: 70000,
				top: 180000,
				rates: [
					{start_date: "01/04/2001", end_date: "31/03/2009", amount: 0.3900},
					{start_date: "01/04/2009", end_date: "31/03/2010", amount: 0.3800},
					{start_date: "01/04/2010", end_date: "31/03/2011", amount: 0.3550},
					{start_date: "01/04/2011", end_date: "31/03/2022", amount: 0.3300},
				]
			},
			bracket_9: {
				bottom: 180000,
				top: Number.POSITIVE_INFINITY,
				rates: [
					{start_date: "01/04/2021", end_date: "31/03/2022", amount: 0.3900},
				]
			}
		},
		taxCodes: {
			M: { 
				start: 0,
				loan: false,
				IETC: false,
				increments: true
			},
			M_SL: { 
				start: 0,
				loan: true,
				IETC: false,
				increments: true
			},
			ME: {
				start: 0,
				loan: false,
				IETC: true,
				increments: true
			},
			ME_SL: {
				start: 0,
				loan: true,
				IETC: true,
				increments: true
			},
			SB: {
				start: 0,
				loan: false,
				IETC: false,
				increments: false
			},
			SB_SL: {
				start: 0,
				loan: true,
				IETC: false,
				increments: false
			},
			S: {
				start: 14000,
				loan: false,
				IETC: false,
				increments: false
			},
			S_SL: {
				start: 14000,
				loan: true,
				IETC: false,
				increments: false
			},
			SH: {
				start: 48000,
				loan: false,
				IETC: false,
				increments: false
			},
			SH_SL: {
				start: 48000,
				loan: true,
				IETC: false,
				increments: false
			},
			ST: {
				start: 70000,
				loan: false,
				IETC: false,
				increments: false
			},
			ST_SL: {
				start: 70000,
				loan: true,
				IETC: false,
				increments: false
			},
			SA: {
				start: 180000,
				loan: false,
				IETC: false,
				increments: false
			},
			SA_SL: {
				start: 180000,
				loan: true,
				IETC: false,
				increments: false
			}
		},
    },
    WFF_data: {
		FTC: {
			Threshold: [
				{start_date: "01/04/2010", end_date: "31/03/2012", amount: 36827.00},
				{start_date: "01/04/2012", end_date: "30/06/2018", amount: 36350.00},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 42700.00}
			],
			Abatement: [
				{start_date: "01/04/2010", end_date: "31/03/2012", amount: 0.2000},
				{start_date: "01/04/2012", end_date: "30/06/2018", amount: 0.2125},
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 0.2500}
			]
		},
		BSTC: {
			Threshold: [
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 79000.00}
			],
			Abatement: [
				{start_date: "01/07/2018", end_date: "31/03/2022", amount: 0.25}
			]
		}
	},
	IETC: {
		rate: [{start_date: "01/04/2009", end_date: "31/03/2022", amount: 520}],
		threshold: [{start_date: "01/04/2009", end_date: "31/03/2022", amount: 24000}],
		deduction_threshold: [{start_date: "01/04/2009", end_date: "31/03/2022", amount: 44000}],
		deduction_rate: [{start_date: "01/04/2009", end_date: "31/03/2022", amount: 0.13}]
	}
}