export interface ContactFormValues {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  preferredContact: string;
  agree: boolean;
}

/**
 * お問い合わせフォームの送信処理。
 * 現時点では送信先が未確定のため、疑似的に非同期処理を行うのみ。
 * 送信先が決まり次第、ここで API Route（例: /api/contact）や外部フォームサービスへの
 * fetch 呼び出しに差し替えてください。
 */
export async function submitContactForm(values: ContactFormValues): Promise<{ success: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  // eslint-disable-next-line no-console
  console.log("Contact form submitted (placeholder):", values);
  return { success: true };
}
