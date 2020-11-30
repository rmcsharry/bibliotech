export default interface IEdge {
  node: {
    recordId: string
    data: {
      Manufacturer: string
      MASTER_FORMAT_CLASSIFICATION: [IClassification]
      Last_update: Date
      Logo: [IFile]
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
  full?: {
    height: number
    url: string
    width: number
  }
  large: {
    height: number
    url: string
    width: number
  }
  small: {
    height: number
    url: string
    width: number
  }
}

export interface IPremium {
  recordId: string
  data: {
    About_Us: string
    Companies_Represented: [string]
    Represented_Logos: [IFile]
    FAQ: string
    FAQ_HTML: string
    Is_Supplier: boolean
    Feature_Images: [IFile]
    File_Downloads: [IFile]
  }
}

export interface IFile {
  id: string
  filename: string
  url: string
  thumbnails: IThumbnail
}
