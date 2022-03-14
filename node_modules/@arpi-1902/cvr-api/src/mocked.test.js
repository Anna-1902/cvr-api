
const axios = require('axios');
const {getMockSearch, baseUrl} = require("./utils.js");

jest.mock('axios');

test('when api is succesfull, will return users', async () => {
  const data = [
      {id: 1, name: "Lise"},
      {id: 2, name: "Bo"}
  ];
  axios.get.mockResolvedValueOnce({data: [
      {id: 1, name: "Lise"},
      {id: 2, name: "Bo"}
    ]});

  // when
  const result = await getMockSearch();

  // then
  expect(axios.get).toHaveBeenCalledWith(`${baseUrl}`);
  expect(result).toEqual(data);
});

test('when api fail, will return errormessage', async () => {
  const message = "Network Error";

  axios.get.mockRejectedValueOnce("Network Error");

  // when
  const result = await getMockSearch();

  // then
  expect(axios.get).toHaveBeenCalledWith(`${baseUrl}`);
  expect(result).toEqual(message);
})
