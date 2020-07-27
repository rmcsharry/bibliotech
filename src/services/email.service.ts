import { ActionCodeSettings } from '@firebase/auth-types'

export class EmailService {
  static sendEmailVerification = async (user: any) => {
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
