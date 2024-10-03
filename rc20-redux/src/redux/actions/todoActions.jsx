
export const sil =(id)=>({


    type:"DELETE",payload:id
})

export const ekle = (todo) => ({
  type: "ADD",
  payload: todo,
});