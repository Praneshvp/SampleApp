

export const GenericService = {
  getMethod
}




//Generic get.........
function getMethod(url:any) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  }
  return fetch(
    url,
    requestOptions,
  )
    .then(handleResponse)
    .then(res => {

      return res
    })
}



function handleResponse(response:any) {
  console.log(response)
 
}
