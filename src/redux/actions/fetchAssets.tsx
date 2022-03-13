import Types from "../types/types"



export function isLoading(bool:boolean) {
  return {
    type: Types.LOADER,
    isLoading: bool
  }
}

export function successfulFetch(data:any) {
  return {
    type: Types.FETCH_ASSETS_CAROUSAL,
    data
  }
}


export function fetchError(error:any) {
  return {
    type: Types.ERROR,
    error
  }
}


export function fetchImages() {

  // console.log("response", data)

}





