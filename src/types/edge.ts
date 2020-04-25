export default interface IEdge {
  node: {
    recordId: string
    data: {
      Manufacturer: string
      MASTER_FORMAT_CLASSIFICATION: [IClassification]
      Last_update: Date
      Logo: [IThumbnail]
      Company_Description: string
      Website: string
      Tech_Reps: {
        recordId: string
        data: {
          Email: string
          Technical_Rep_Name: string
          Phone_no___Cell_: string
        }
      }
    }
  }
}

export interface IClassification {
  recordId: string
  data: {
    Section_Name: string
    Section_No: string
  }
}

export interface IThumbnail {
  thumbnails: {
    full: {
      height: number
      url: string
      width: number
    }
  }
}
