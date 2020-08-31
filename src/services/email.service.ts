import { ActionCodeSettings } from '@firebase/auth-types'
import { User } from 'firebase/app'

export class EmailService {
  static sendEmailVerification = async (user: User) => {
    console.log('emailing ' + user)
    await user.sendEmailVerification()
    EmailService.buildVerificationSettings()
  }

  private static buildVerificationSettings(): ActionCodeSettings {
    const settings: ActionCodeSettings = {
      url: `${process.env.BASE_URL}/verify`,
      handleCodeInApp: false,
    }
    return settings
  }
}
