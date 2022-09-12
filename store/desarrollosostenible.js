export const state = () => ({
    publicaciones: '',
    reportajes: '',
    columnas: [],
    videos: '',
    noticias: '',
    eventos: '',
  })
  
  export const mutations = {
    setPublicaciones (state, publicaciones) {
      state.publicaciones = publicaciones
    },
    setReportajes (state, reportajes) {
      state.reportajes= reportajes
    },
    setColumnas (state, columnas) {
      state.columnas = columnas
    },
    setVideos (state, videos) {
      state.videos = videos
    },
    setNoticias (state, noticias) {
      state.noticias = noticias
    },
    setEventos (state, eventos) {
      state.eventos = eventos
    }
  }

  