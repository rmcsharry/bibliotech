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
      Tech_Reps: [ITechRep]
      Premium: boolean
      Premium_Manufacturers: [IPremium]
    }
  }
}

export interface ITechRep {
  recordId: string
  data: {
    Email: string
    Technical_Rep_Name: string
    Cell_Number: string
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
    large: {
      height: number
      url: string
      width: number
    }
  }
}

export interface IPremium {
  recordId: string
  data: {
    FAQ: string
    FAQ_HTML: string
    Downloads_File_Name: string
    Is_Supplier: boolean
    Feature_Images: [IThumbnail]
  }
}
