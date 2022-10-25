import _findIndex from "lodash/findIndex"

let data = []

function addData(d) {
  if (d.bcgx === 0 || d.city.indexOf("Federal Corp") !== -1) {
    return
  }

  const indx = _findIndex(data, { city: d.city.trim() })
  if (indx !== -1) {
    data[indx].ais.push(d.ais)
    data[indx].bcgx.push(d.bcgx)
    data[indx].offices.push(d.office)
  } else {
    const datum = {
      city: d.city.trim(),
      offices: [d.office],
      ais: [d.ais],
      bcgx: [d.bcgx],
      lat: d.lat,
      lng: d.lng,
      address: d.address
    }

    data.push(datum)
  }
}

export function createPointsData() {
  data = []
  addData({
    city: "Bengaluru",
    office: "ACC - Bengaluru",
    address: "Bengaluru, Karnataka, India",
    bcgx: 149,
    ais: 143,
    lat: 12.9715987,
    lng: 77.5945627
  })
  addData({
    city: "Gurugram",
    office: "ACC - Gurugram",
    address: "Gurugram, Haryana, India",
    bcgx: 217,
    ais: 199,
    lat: 28.4594965,
    lng: 77.0266383
  })
  addData({
    city: "Beijing",
    office: "Beijing",
    address: "Beijing, China",
    bcgx: 4,
    ais: 3,
    lat: 39.904211,
    lng: 116.407395
  })
  addData({
    city: "Bengaluru",
    office: "Bengaluru",
    address: "Bengaluru, Karnataka, India",
    bcgx: 13,
    ais: 12,
    lat: 12.9715987,
    lng: 77.5945627
  })
  addData({
    city: "Chennai",
    office: "Chennai",
    address: "Chennai, Tamil Nadu, India",
    bcgx: 2,
    ais: 1,
    lat: 13.0826802,
    lng: 80.2707184
  })
  addData({
    city: "DV Shanghai",
    office: "DV Shanghai",
    address: "Shanghai, China",
    bcgx: 12,
    ais: 0,
    lat: 31.22752,
    lng: 121.4972
  })
  addData({
    city: "DV Shenzhen",
    office: "DV Shenzhen",
    address: "Shenzhen, Guangdong Province, China",
    bcgx: 2,
    ais: 0,
    lat: 22.5428599,
    lng: 114.05956
  })
  addData({
    city: "DV Singapore",
    office: "DV Singapore",
    address: "Singapore",
    bcgx: 55,
    ais: 0,
    lat: 1.352083,
    lng: 103.819836
  })
  addData({
    city: "DV Sydney",
    office: "DV Sydney",
    address: "Sydney NSW, Australia",
    bcgx: 55,
    ais: 0,
    lat: -33.8688197,
    lng: 151.2092955
  })
  addData({
    city: "DV Tokyo",
    office: "DV Tokyo",
    address: "Tokyo, Japan",
    bcgx: 54,
    ais: 0,
    lat: 35.6761919,
    lng: 139.6503106
  })
  addData({
    city: "New Delhi",
    office: "Global Services New Delhi",
    address: "New Delhi, Delhi, India",
    bcgx: 14,
    ais: 0,
    lat: 28.6139391,
    lng: 77.2090212
  })
  addData({
    city: "Hong Kong",
    office: "Hong Kong",
    address: "Hong Kong",
    bcgx: 9,
    ais: 5,
    lat: 22.3193039,
    lng: 114.1693611
  })
  addData({
    city: "Melbourne",
    office: "Melbourne",
    address: "Melbourne VIC, Australia",
    bcgx: 12,
    ais: 12,
    lat: -37.8136276,
    lng: 144.9630576
  })
  addData({
    city: "Mumbai",
    office: "Mumbai",
    address: "Mumbai, Maharashtra, India",
    bcgx: 4,
    ais: 3,
    lat: 19.0759837,
    lng: 72.8776559
  })
  addData({
    city: "New Delhi",
    office: "New Delhi",
    address: "New Delhi, Delhi, India",
    bcgx: 7,
    ais: 5,
    lat: 28.6139391,
    lng: 77.2090212
  })
  addData({
    city: "Perth",
    office: "Perth",
    address: "Perth WA, Australia",
    bcgx: 26,
    ais: 22,
    lat: -31.9523123,
    lng: 115.861309
  })
  addData({
    city: "Seoul",
    office: "Seoul",
    address: "Seoul, South Korea",
    bcgx: 4,
    ais: 4,
    lat: 37.566535,
    lng: 126.9779692
  })
  addData({
    city: "Shanghai",
    office: "Shanghai",
    address: "Shanghai, China",
    bcgx: 17,
    ais: 16,
    lat: 31.230416,
    lng: 121.473701
  })
  addData({
    city: "Shenzhen",
    office: "Shenzhen",
    address: "Shenzhen, Guangdong Province, China",
    bcgx: 16,
    ais: 13,
    lat: 22.5428599,
    lng: 114.05956
  })
  addData({
    city: "Singapore",
    office: "Singapore",
    address: "Singapore",
    bcgx: 31,
    ais: 27,
    lat: 1.352083,
    lng: 103.819836
  })
  addData({
    city: "Sydney",
    office: "Sydney",
    address: "Sydney NSW, Australia",
    bcgx: 34,
    ais: 30,
    lat: -33.8688197,
    lng: 151.2092955
  })
  addData({
    city: "Taipei",
    office: "Taipei",
    address: "Taipei City, Taiwan",
    bcgx: 2,
    ais: 2,
    lat: 25.0329636,
    lng: 121.5654268
  })
  addData({
    city: "Tokyo",
    office: "Tokyo",
    address: "Tokyo, Japan",
    bcgx: 59,
    ais: 45,
    lat: 35.6761919,
    lng: 139.6503106
  })
  addData({
    city: "London",
    office: "ACC - London",
    address: "London, UK",
    bcgx: 24,
    ais: 22,
    lat: 51.5072178,
    lng: -0.1275862
  })
  addData({
    city: "Madrid",
    office: "ACC - Madrid",
    address: "Madrid, Spain",
    bcgx: 18,
    ais: 16,
    lat: 40.4167754,
    lng: -3.7037902
  })
  addData({
    city: "Amsterdam",
    office: "Amsterdam",
    address: "Amsterdam, Netherlands",
    bcgx: 9,
    ais: 8,
    lat: 52.3675734,
    lng: 4.9041389
  })
  addData({
    city: "Athens",
    office: "Athens",
    address: "Athens, Greece",
    bcgx: 1,
    ais: 0,
    lat: 37.9838096,
    lng: 23.7275388
  })
  addData({
    city: "Barcelona",
    office: "Barcelona",
    address: "Barcelona, Spain",
    bcgx: 2,
    ais: 1,
    lat: 41.3873974,
    lng: 2.168568
  })
  addData({
    city: "Berlin",
    office: "Berlin",
    address: "Berlin, Germany",
    bcgx: 17,
    ais: 16,
    lat: 52.5200066,
    lng: 13.404954
  })
  addData({
    city: "Bogotá",
    office: "Bogotá",
    address: "Bogotá, Bogota, Colombia",
    bcgx: 15,
    ais: 15,
    lat: 4.7109886,
    lng: -74.072092
  })
  addData({
    city: "Brussels",
    office: "Brussels",
    address: "Brussels, Belgium",
    bcgx: 1,
    ais: 1,
    lat: 50.8476424,
    lng: 4.3571696
  })
  addData({
    city: "Budapest",
    office: "Budapest",
    address: "Budapest, Hungary",
    bcgx: 1,
    ais: 1,
    lat: 47.497912,
    lng: 19.040235
  })
  addData({
    city: "Buenos Aires",
    office: "Buenos Aires",
    address: "Buenos Aires, Argentina",
    bcgx: 1,
    ais: 1,
    lat: -34.6036844,
    lng: -58.3815591
  })
  addData({
    city: "Casablanca",
    office: "Casablanca",
    address: "Casablanca, Morocco",
    bcgx: 31,
    ais: 29,
    lat: 33.5731104,
    lng: -7.5898434
  })
  addData({
    city: "Cologne",
    office: "Cologne",
    address: "Cologne, Germany",
    bcgx: 7,
    ais: 4,
    lat: 50.937531,
    lng: 6.9602786
  })
  addData({
    city: "Copenhagen",
    office: "Copenhagen",
    address: "Copenhagen, Denmark",
    bcgx: 6,
    ais: 6,
    lat: 55.6760968,
    lng: 12.5683371
  })
  addData({
    city: "Doha",
    office: "Doha",
    address: "Doha, Qatar",
    bcgx: 1,
    ais: 1,
    lat: 25.2854473,
    lng: 51.5310398
  })
  addData({
    city: "Dubai Free Zone",
    office: "Dubai Free Zone",
    address: "Dubai Airport Free Zone - Dubai - United Arab Emirates",
    bcgx: 19,
    ais: 16,
    lat: 25.2609919,
    lng: 55.3731211
  })
  addData({
    city: "Düsseldorf",
    office: "Düsseldorf",
    address: "Düsseldorf, Germany",
    bcgx: 12,
    ais: 12,
    lat: 51.2277411,
    lng: 6.7734556
  })
  addData({
    city: "Berlin",
    office: "DV Berlin",
    address: "Berlin, Germany",
    bcgx: 152,
    ais: 4,
    lat: 52.5200066,
    lng: 13.404954
  })
  addData({
    city: "Casablanca",
    office: "DV Casablanca",
    address: "Casablanca, Morocco",
    bcgx: 3,
    ais: 0,
    lat: 33.5731104,
    lng: -7.5898434
  })
  addData({
    city: "Dubai",
    office: "DV Dubai",
    address: "Dubai - United Arab Emirates",
    bcgx: 13,
    ais: 0,
    lat: 25.2048493,
    lng: 55.2707828
  })
  addData({
    city: "London",
    office: "DV London",
    address: "London, UK",
    bcgx: 96,
    ais: 0,
    lat: 51.5072178,
    lng: -0.1275862
  })
  addData({
    city: "Paris",
    office: "DV Paris",
    address: "Paris, France",
    bcgx: 6,
    ais: 0,
    lat: 48.856614,
    lng: 2.3522219
  })
  addData({
    city: "Frankfurt",
    office: "Frankfurt",
    address: "Frankfurt, Germany",
    bcgx: 21,
    ais: 18,
    lat: 50.1109221,
    lng: 8.6821267
  })
  addData({
    city: "Hamburg",
    office: "Hamburg",
    address: "Hamburg, Germany",
    bcgx: 3,
    ais: 3,
    lat: 53.5510846,
    lng: 9.9936818
  })
  addData({
    city: "Helsinki",
    office: "Helsinki",
    address: "Helsinki, Finland",
    bcgx: 3,
    ais: 3,
    lat: 60.1698557,
    lng: 24.938379
  })
  addData({
    city: "Istanbul",
    office: "Istanbul",
    address: "İstanbul, Turkey",
    bcgx: 1,
    ais: 1,
    lat: 41.0082376,
    lng: 28.9783589
  })
  addData({
    city: "Johannesburg",
    office: "Johannesburg",
    address: "Johannesburg, South Africa",
    bcgx: 3,
    ais: 3,
    lat: -26.2041028,
    lng: 28.0473051
  })
  addData({
    city: "London",
    office: "London",
    address: "London, UK",
    bcgx: 50,
    ais: 44,
    lat: 51.5072178,
    lng: -0.1275862
  })
  addData({
    city: "Madrid",
    office: "Madrid",
    address: "Madrid, Spain",
    bcgx: 64,
    ais: 58,
    lat: 40.4167754,
    lng: -3.7037902
  })
  addData({
    city: "Milan",
    office: "Milan",
    address: "Milan, Metropolitan City of Milan, Italy",
    bcgx: 26,
    ais: 25,
    lat: 45.4642035,
    lng: 9.189982
  })
  addData({
    city: "Munich",
    office: "Munich",
    address: "Munich, Germany",
    bcgx: 56,
    ais: 45,
    lat: 48.1351253,
    lng: 11.5819806
  })
  addData({
    city: "Oslo",
    office: "Oslo",
    address: "Oslo, Norway",
    bcgx: 6,
    ais: 6,
    lat: 59.9138688,
    lng: 10.7522454
  })
  addData({
    city: "Panama City",
    office: "Panama City",
    address: "Panama City, FL, USA",
    bcgx: 1,
    ais: 1,
    lat: 30.1588129,
    lng: -85.6602058
  })
  addData({
    city: "Paris",
    office: "Paris",
    address: "Paris, France",
    bcgx: 126,
    ais: 100,
    lat: 48.856614,
    lng: 2.3522219
  })
  addData({
    city: "Berlin",
    office: "Platinion Berlin",
    address: "Berlin, Germany",
    bcgx: 18,
    ais: 7,
    lat: 52.5200066,
    lng: 13.404954
  })
  addData({
    city: "Casablanca",
    office: "Platinion Casablanca",
    address: "Casablanca, Morocco",
    bcgx: 4,
    ais: 1,
    lat: 33.5731104,
    lng: -7.5898434
  })
  addData({
    city: "Dubai",
    office: "Platinion Dubai",
    address: "Dubai - United Arab Emirates",
    bcgx: 3,
    ais: 0,
    lat: 25.2048493,
    lng: 55.2707828
  })
  addData({
    city: "Frankfurt",
    office: "Platinion Frankfurt",
    address: "Frankfurt, Germany",
    bcgx: 1,
    ais: 1,
    lat: 50.1109221,
    lng: 8.6821267
  })
  addData({
    city: "Johannesburg",
    office: "Platinion Johannesburg",
    address: "Johannesburg, South Africa",
    bcgx: 1,
    ais: 0,
    lat: -26.2041028,
    lng: 28.0473051
  })
  addData({
    city: "London",
    office: "Platinion London",
    address: "London, UK",
    bcgx: 25,
    ais: 17,
    lat: 51.5072178,
    lng: -0.1275862
  })
  addData({
    city: "Milan",
    office: "Platinion Milan",
    address: "Milan, Metropolitan City of Milan, Italy",
    bcgx: 5,
    ais: 1,
    lat: 45.4642035,
    lng: 9.189982
  })
  addData({
    city: "Paris",
    office: "Platinion Paris",
    address: "Paris, France",
    bcgx: 1,
    ais: 0,
    lat: 48.856614,
    lng: 2.3522219
  })
  addData({
    city: "Prague",
    office: "Prague",
    address: "Prague, Czechia",
    bcgx: 2,
    ais: 1,
    lat: 50.0755381,
    lng: 14.4378005
  })
  addData({
    city: "Rio de Janeiro",
    office: "Rio de Janeiro",
    address: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
    bcgx: 2,
    ais: 1,
    lat: -22.9068467,
    lng: -43.1728965
  })
  addData({
    city: "Santiago",
    office: "Santiago",
    address: "Santiago, Santiago Metropolitan Region, Chile",
    bcgx: 14,
    ais: 11,
    lat: -33.4488897,
    lng: -70.6692655
  })
  addData({
    city: "São Paulo",
    office: "São Paulo",
    address: "São Paulo, State of São Paulo, Brazil",
    bcgx: 55,
    ais: 48,
    lat: -23.5557714,
    lng: -46.6395571
  })
  addData({
    city: "Stockholm",
    office: "Stockholm",
    address: "Stockholm, Sweden",
    bcgx: 18,
    ais: 18,
    lat: 59.3293235,
    lng: 18.0685808
  })
  addData({
    city: "Stuttgart",
    office: "Stuttgart",
    address: "Stuttgart, Germany",
    bcgx: 1,
    ais: 1,
    lat: 48.7758459,
    lng: 9.1829321
  })
  addData({
    city: "Tel Aviv",
    office: "Tel Aviv",
    address: "Tel Aviv-Yafo, Israel",
    bcgx: 2,
    ais: 1,
    lat: 32.0852999,
    lng: 34.7817676
  })
  addData({
    city: "Vienna",
    office: "Vienna",
    address: "Vienna, Austria",
    bcgx: 5,
    ais: 5,
    lat: 48.2081743,
    lng: 16.3738189
  })
  addData({
    city: "Warsaw",
    office: "Warsaw",
    address: "Warsaw, Poland",
    bcgx: 20,
    ais: 17,
    lat: 52.2296756,
    lng: 21.0122287
  })
  addData({
    city: "Zürich",
    office: "Zürich",
    address: "Zürich, Switzerland",
    bcgx: 17,
    ais: 16,
    lat: 47.3768866,
    lng: 8.541694
  })
  addData({
    city: "Chicago",
    office: "ACC - Chicago",
    address: "Chicago, IL, USA",
    bcgx: 57,
    ais: 52,
    lat: 41.8781136,
    lng: -87.6297982
  })
  addData({
    city: "Atlanta",
    office: "Atlanta",
    address: "Atlanta, GA, USA",
    bcgx: 12,
    ais: 9,
    lat: 33.7489954,
    lng: -84.3879824
  })
  addData({
    city: "Austin",
    office: "Austin",
    address: "Austin, TX, USA",
    bcgx: 4,
    ais: 4,
    lat: 30.267153,
    lng: -97.7430608
  })
  addData({
    city: "San Francisco",
    office: "Bay Area - San Francisco",
    address: "San Francisco, CA, USA",
    bcgx: 32,
    ais: 26,
    lat: 37.7749295,
    lng: -122.4194155
  })
  addData({
    city: "Silicon Valley",
    office: "Bay Area - Silicon Valley",
    address: "Silicon Valley, CA, USA",
    bcgx: 7,
    ais: 7,
    lat: 37.387474,
    lng: -122.0575434
  })
  addData({
    city: "BCG Federal Corp",
    office: "BCG Federal Corp",
    address: "",
    bcgx: 12,
    ais: 12,
    lat: 0,
    lng: 0
  })
  addData({
    city: "Atlanta",
    office: "BCG Nexus Atlanta",
    address: "Atlanta, GA, USA",
    bcgx: 4,
    ais: 0,
    lat: 33.7489954,
    lng: -84.3879824
  })
  addData({
    city: "Boston",
    office: "Boston",
    address: "Boston, MA, USA",
    bcgx: 115,
    ais: 99,
    lat: 42.3600825,
    lng: -71.0588801
  })
  addData({
    city: "Chicago",
    office: "Chicago",
    address: "Chicago, IL, USA",
    bcgx: 33,
    ais: 30,
    lat: 41.8781136,
    lng: -87.6297982
  })
  addData({
    city: "Dallas",
    office: "Dallas",
    address: "Dallas, TX, USA",
    bcgx: 14,
    ais: 13,
    lat: 32.7766642,
    lng: -96.7969879
  })
  addData({
    city: "Denver",
    office: "Denver",
    address: "Denver, CO, USA",
    bcgx: 6,
    ais: 6,
    lat: 39.7392358,
    lng: -104.990251
  })
  addData({
    city: "Great Lakes",
    office: "DV Great Lakes",
    address: "The Great Lakes",
    bcgx: 42,
    ais: 0,
    lat: 45.0522366,
    lng: -82.4846115
  })
  addData({
    city: "Manhattan Beach",
    office: "DV Manhattan Beach",
    address: "Manhattan Beach, CA 90266, USA",
    bcgx: 144,
    ais: 4,
    lat: 33.8847361,
    lng: -118.4109089
  })
  addData({
    city: "New York",
    office: "DV New York",
    address: "New York, NY, USA",
    bcgx: 145,
    ais: 1,
    lat: 40.7127753,
    lng: -74.0059728
  })
  addData({
    city: "Seattle",
    office: "DV Seattle",
    address: "Seattle, WA, USA",
    bcgx: 4,
    ais: 0,
    lat: 47.6062095,
    lng: -122.3320708
  })
  addData({
    city: "Global Services",
    office: "Global Services",
    address: "80 M St SE, Washington, DC 20003, USA",
    bcgx: 12,
    ais: 0,
    lat: 38.8770036,
    lng: -77.0063728
  })
  addData({
    city: "Boston",
    office: "Global Services Boston",
    address: "Boston, MA, USA",
    bcgx: 2,
    ais: 0,
    lat: 42.3600825,
    lng: -71.0588801
  })
  addData({
    city: "Houston",
    office: "Houston",
    address: "Houston, TX, USA",
    bcgx: 5,
    ais: 5,
    lat: 29.7604267,
    lng: -95.3698028
  })
  addData({
    city: "Los Angeles",
    office: "Los Angeles",
    address: "Los Angeles, CA, USA",
    bcgx: 29,
    ais: 28,
    lat: 34.0522342,
    lng: -118.2436849
  })
  addData({
    city: "Miami",
    office: "Miami",
    address: "Miami, FL, USA",
    bcgx: 7,
    ais: 7,
    lat: 25.7616798,
    lng: -80.1917902
  })
  addData({
    city: "Minneapolis",
    office: "Minneapolis",
    address: "Minneapolis, MN, USA",
    bcgx: 1,
    ais: 1,
    lat: 44.977753,
    lng: -93.2650108
  })
  addData({
    city: "Montreal",
    office: "Montreal",
    address: "Montreal, QC, Canada",
    bcgx: 3,
    ais: 3,
    lat: 45.5018869,
    lng: -73.5673919
  })
  addData({
    city: "Nashville",
    office: "Nashville",
    address: "Nashville, TN, USA",
    bcgx: 1,
    ais: 1,
    lat: 36.1626638,
    lng: -86.7816016
  })
  addData({
    city: "New Jersey",
    office: "New Jersey",
    address: "New Jersey, USA",
    bcgx: 7,
    ais: 7,
    lat: 40.0583238,
    lng: -74.4056612
  })
  addData({
    city: "New York",
    office: "New York",
    address: "New York, NY, USA",
    bcgx: 102,
    ais: 93,
    lat: 40.7127753,
    lng: -74.0059728
  })
  addData({
    city: "Philadelphia",
    office: "Philadelphia",
    address: "Philadelphia, PA, USA",
    bcgx: 3,
    ais: 1,
    lat: 39.9525839,
    lng: -75.1652215
  })
  addData({
    city: "Pittsburgh",
    office: "Pittsburgh",
    address: "Pittsburgh, PA, USA",
    bcgx: 30,
    ais: 17,
    lat: 40.4406248,
    lng: -79.9958864
  })
  addData({
    city: "San Diego",
    office: "San Diego",
    address: "San Diego, CA, USA",
    bcgx: 3,
    ais: 3,
    lat: 32.715738,
    lng: -117.1610838
  })
  addData({
    city: "Seattle",
    office: "Seattle",
    address: "Seattle, WA, USA",
    bcgx: 41,
    ais: 35,
    lat: 47.6062095,
    lng: -122.3320708
  })
  addData({
    city: "Toronto",
    office: "Toronto",
    address: "Toronto, ON, Canada",
    bcgx: 34,
    ais: 30,
    lat: 43.653226,
    lng: -79.3831843
  })
  addData({
    city: "Washington, D.C.",
    office: "Washington, D.C.",
    address: "Washington, DC, USA",
    bcgx: 21,
    ais: 18,
    lat: 38.9071923,
    lng: -77.0368707
  })

  return data
}
