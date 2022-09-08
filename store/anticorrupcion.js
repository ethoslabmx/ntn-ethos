export const state = () => ({
    publicaciones: '',
    reportajes: '',
    columnas: '',
    videos: '',
    noticias: '',
    eventos: '',
  })
  
  export const mutations = {
    SetPublicaciones (state, publicaciones) {
      state.publicaciones = publicaciones
    }
  }