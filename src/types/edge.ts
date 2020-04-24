export default interface IEdge {
  node: {
    recordId: string
    data: {
      Manufacturer: string
      Last_update: Date
      Rep_s_email: Array<string>
      Logo: [IThumbnails]
    }
  }
}

export interface IThumbnails {
  thumbnails: {
    full: {
      height: number
      url: string
      width: number
    }
  }
}
