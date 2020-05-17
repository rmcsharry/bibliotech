import { WindowLocation } from '@reach/router'

export default interface IPageProps {
  location: WindowLocation
  authUser: any
  firebase: any
  favorites: Array<string>
}
