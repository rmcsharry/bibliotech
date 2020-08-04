import { ActionCodeSettings } from '@firebase/auth-types'
import { User } from 'firebase/app'

export class EmailService {
  static sendEmailVerification = async (user: User) => {
    console.log('emailing ' + user)
    await user.sendEmailVerification()
    // EmailService.buildVerificationSettings(user.email)
    // )
  }

  private static buildVerificationSettings(emailAddress: string): ActionCodeSettings {
    const settings: ActionCodeSettings = {
      url: `${process.env.BASE_URL}?email=${emailAddress}`,
      handleCodeInApp: false,
    }
    return settings
  }
}
