"use server"

type ActionStateType = {
  errors:string[]
  success: string
}

export async function addProduct(prevState: ActionStateType, formData: FormData) {
  console.log("desde addProduct")

  return {
    errors: [],
    success: ""
  }
}