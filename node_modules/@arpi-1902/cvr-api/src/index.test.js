const {
  getCompanyByName,
  getCompanyByPhone,
  getCompanyByProdu,
  getCompanyBySearch,
  getCompanyByVat
} = require('./index.js');


//search by name, cvr or p-number
test('getCompanyBySearch finds company in cvr register by name, cvr or p-number', async () => {
  const data = {"name": "STEN & CO. ApS"}
  const result = await getCompanyBySearch('26130972','dk');
  expect(result).toEqual(expect.objectContaining(data))
})
//test('getCompanyBySearch trows error when no result is found', async () => {
//  const result = await getCompanyBySearch('hdidehalha','dk');
//expect(result.message).toBe('Request failed with status code 404')
//})


//search by vat
test('getCompanyByVat finds company in cvr register by cvr', async () => {
  const data = {"name": "Massage 4720 v/Trold Ellegård"}
  const result = await getCompanyByVat(42584126,'dk');
  expect(result).toEqual(expect.objectContaining(data))
})
test('getCompanyByVat trows error when passed value is not a number', async () => {
  const result = await getCompanyByVat('abc','dk');
  expect(result).toEqual(expect.objectContaining({"error": "NO_SEARCH"}))
})
test('getCompanyByVat trows error when no cvr is found', async () => {
  const result = await getCompanyByVat(10996644,'dk');
  expect(result.message).toBe('Request failed with status code 404')
})


//search by name
test('getCompanyByName finds company in cvr register by name', async () => {
  const data = {"vat": 24398013}
  const result = await getCompanyByName('gh ejendom','dk');
  expect(result).toEqual(expect.objectContaining(data))
})
//test('getCompanyByName trows error when no company is found', async () => {
//  const result = await getCompanyByName('hfiwlfbqoaæb','dk');
//expect(result.message).toBe('Request failed with status code 404')
//})

//search company by productionunit
test('getCompanyByProdu finds company in cvr register by production unit', async () => {
  const data = {"vat": 26130972,
    "name": "Sushi San Østerbro"}
  const result = await getCompanyByProdu(1022763411,'dk');
  expect(result).toEqual(expect.objectContaining(data))
})
test('getCompanyByProdu throws error when no production unit is found', async () => {
  const result = await getCompanyByProdu(10227611,'dk');
  expect(result.message).toBe('Request failed with status code 404')
})

//search company by phone
test('getCompanyByPhone finds company in cvr register by phone', async () => {
  const data = {"name": "Gro My Gro ApS", "vat": 39846039}
  const result = await getCompanyByPhone('41883086','dk');
  expect(result).toEqual(expect.objectContaining(data))
})
//test('getCompanyByPhone trows error when passed value is not a number', async () => {
//const result = await getCompanyByPhone('hfiwlfbqoaæb','dk');
//expect(result).toEqual(expect.objectContaining({"error": "NO_SEARCH"}))
//})
test('getCompanyByPhone trows error when no company is found', async () => {
  const result = await getCompanyByPhone('74839201','dk');
  expect(result.message).toBe('Request failed with status code 404')
})
