const alpha2MappingsByCode = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}
const alpha2MappingsByName = {
    "Bangladesh": "BD",
    "Belgium": "BE",
    "Burkina Faso": "BF",
    "Bulgaria": "BG",
    "Bosnia and Herzegovina": "BA",
    "Barbados": "BB",
    "Wallis and Futuna": "WF",
    "Saint Barthelemy": "BL",
    "Bermuda": "BM",
    "Brunei": "BN",
    "Bolivia": "BO",
    "Bahrain": "BH",
    "Burundi": "BI",
    "Benin": "BJ",
    "Bhutan": "BT",
    "Jamaica": "JM",
    "Bouvet Island": "BV",
    "Botswana": "BW",
    "Samoa": "WS",
    "Bonaire, Saint Eustatius and Saba ": "BQ",
    "Brazil": "BR",
    "Bahamas": "BS",
    "Jersey": "JE",
    "Belarus": "BY",
    "Belize": "BZ",
    "Russia": "RU",
    "Rwanda": "RW",
    "Serbia": "RS",
    "East Timor": "TL",
    "Reunion": "RE",
    "Turkmenistan": "TM",
    "Tajikistan": "TJ",
    "Romania": "RO",
    "Tokelau": "TK",
    "Guinea-Bissau": "GW",
    "Guam": "GU",
    "Guatemala": "GT",
    "South Georgia and the South Sandwich Islands": "GS",
    "Greece": "GR",
    "Equatorial Guinea": "GQ",
    "Guadeloupe": "GP",
    "Japan": "JP",
    "Guyana": "GY",
    "Guernsey": "GG",
    "French Guiana": "GF",
    "Georgia": "GE",
    "Grenada": "GD",
    "United Kingdom": "GB",
    "UK": "GB",
    "Gabon": "GA",
    "El Salvador": "SV",
    "Guinea": "GN",
    "Gambia": "GM",
    "Greenland": "GL",
    "Gibraltar": "GI",
    "Ghana": "GH",
    "Oman": "OM",
    "Tunisia": "TN",
    "Jordan": "JO",
    "Croatia": "HR",
    "Haiti": "HT",
    "Hungary": "HU",
    "Hong Kong": "HK",
    "Honduras": "HN",
    "Heard Island and McDonald Islands": "HM",
    "Venezuela": "VE",
    "Puerto Rico": "PR",
    "Palestinian Territory": "PS",
    "Palau": "PW",
    "Portugal": "PT",
    "Svalbard and Jan Mayen": "SJ",
    "Paraguay": "PY",
    "Iraq": "IQ",
    "Panama": "PA",
    "French Polynesia": "PF",
    "Papua New Guinea": "PG",
    "Peru": "PE",
    "Pakistan": "PK",
    "Philippines": "PH",
    "Pitcairn": "PN",
    "Poland": "PL",
    "Saint Pierre and Miquelon": "PM",
    "Zambia": "ZM",
    "Western Sahara": "EH",
    "Estonia": "EE",
    "Egypt": "EG",
    "South Africa": "ZA",
    "Ecuador": "EC",
    "Italy": "IT",
    "Vietnam": "VN",
    "Solomon Islands": "SB",
    "Ethiopia": "ET",
    "Somalia": "SO",
    "Zimbabwe": "ZW",
    "Saudi Arabia": "SA",
    "Spain": "ES",
    "Eritrea": "ER",
    "Montenegro": "ME",
    "Moldova": "MD",
    "Madagascar": "MG",
    "Saint Martin": "MF",
    "Morocco": "MA",
    "Monaco": "MC",
    "Uzbekistan": "UZ",
    "Myanmar": "MM",
    "Mali": "ML",
    "Macao": "MO",
    "Mongolia": "MN",
    "Marshall Islands": "MH",
    "Macedonia": "MK",
    "Mauritius": "MU",
    "Malta": "MT",
    "Malawi": "MW",
    "Maldives": "MV",
    "Martinique": "MQ",
    "Northern Mariana Islands": "MP",
    "Montserrat": "MS",
    "Mauritania": "MR",
    "Isle of Man": "IM",
    "Uganda": "UG",
    "Tanzania": "TZ",
    "Malaysia": "MY",
    "Mexico": "MX",
    "Israel": "IL",
    "France": "FR",
    "British Indian Ocean Territory": "IO",
    "Saint Helena": "SH",
    "Finland": "FI",
    "Fiji": "FJ",
    "Falkland Islands": "FK",
    "Micronesia": "FM",
    "Faroe Islands": "FO",
    "Nicaragua": "NI",
    "Netherlands": "NL",
    "Norway": "NO",
    "Namibia": "NA",
    "Vanuatu": "VU",
    "New Caledonia": "NC",
    "Niger": "NE",
    "Norfolk Island": "NF",
    "Nigeria": "NG",
    "New Zealand": "NZ",
    "Nepal": "NP",
    "Nauru": "NR",
    "Niue": "NU",
    "Cook Islands": "CK",
    "Kosovo": "XK",
    "Ivory Coast": "CI",
    "Switzerland": "CH",
    "Colombia": "CO",
    "China": "CN",
    "Cameroon": "CM",
    "Chile": "CL",
    "Cocos Islands": "CC",
    "Canada": "CA",
    "Republic of the Congo": "CG",
    "Central African Republic": "CF",
    "Democratic Republic of the Congo": "CD",
    "Czech Republic": "CZ",
    "Cyprus": "CY",
    "Christmas Island": "CX",
    "Costa Rica": "CR",
    "Curacao": "CW",
    "Cape Verde": "CV",
    "Cuba": "CU",
    "Swaziland": "SZ",
    "Syria": "SY",
    "Sint Maarten": "SX",
    "Kyrgyzstan": "KG",
    "Kenya": "KE",
    "South Sudan": "SS",
    "Suriname": "SR",
    "Kiribati": "KI",
    "Cambodia": "KH",
    "Saint Kitts and Nevis": "KN",
    "Comoros": "KM",
    "Sao Tome and Principe": "ST",
    "Slovakia": "SK",
    "South Korea": "KR",
    "Slovenia": "SI",
    "North Korea": "KP",
    "Kuwait": "KW",
    "Senegal": "SN",
    "San Marino": "SM",
    "Sierra Leone": "SL",
    "Seychelles": "SC",
    "Kazakhstan": "KZ",
    "Cayman Islands": "KY",
    "Singapore": "SG",
    "Sweden": "SE",
    "Sudan": "SD",
    "Dominican Republic": "DO",
    "Dominica": "DM",
    "Djibouti": "DJ",
    "Denmark": "DK",
    "British Virgin Islands": "VG",
    "Germany": "DE",
    "Yemen": "YE",
    "Algeria": "DZ",
    "United States": "US",
    "United States of America": "US",
    "USA": "US",
    "Uruguay": "UY",
    "Mayotte": "YT",
    "United States Minor Outlying Islands": "UM",
    "Lebanon": "LB",
    "Saint Lucia": "LC",
    "Laos": "LA",
    "Tuvalu": "TV",
    "Taiwan": "TW",
    "Trinidad and Tobago": "TT",
    "Turkey": "TR",
    "Sri Lanka": "LK",
    "Liechtenstein": "LI",
    "Latvia": "LV",
    "Tonga": "TO",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Liberia": "LR",
    "Lesotho": "LS",
    "Thailand": "TH",
    "French Southern Territories": "TF",
    "Togo": "TG",
    "Chad": "TD",
    "Turks and Caicos Islands": "TC",
    "Libya": "LY",
    "Vatican": "VA",
    "Saint Vincent and the Grenadines": "VC",
    "United Arab Emirates": "AE",
    "Andorra": "AD",
    "Antigua and Barbuda": "AG",
    "Afghanistan": "AF",
    "Anguilla": "AI",
    "U.S. Virgin Islands": "VI",
    "Iceland": "IS",
    "Iran": "IR",
    "Armenia": "AM",
    "Albania": "AL",
    "Angola": "AO",
    "Antarctica": "AQ",
    "American Samoa": "AS",
    "Argentina": "AR",
    "Australia": "AU",
    "Austria": "AT",
    "Aruba": "AW",
    "India": "IN",
    "Aland Islands": "AX",
    "Azerbaijan": "AZ",
    "Ireland": "IE",
    "Indonesia": "ID",
    "Ukraine": "UA",
    "Qatar": "QA",
    "Mozambique": "MZ"
}


export const getCountryCodeFromName = (countryName) => {
    if (Object.keys(alpha2MappingsByName).includes(countryName)) {
        return alpha2MappingsByName[countryName]
    }

    return ""
}