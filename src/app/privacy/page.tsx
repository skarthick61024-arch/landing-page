import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - TeleTorrent',
  description: 'Learn how TeleTorrent handles your data, permissions, and privacy in compliance with Google Play standards.',
  alternates: {
    canonical: 'https://www.teletorrent.me/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - TeleTorrent',
    description: 'Learn how TeleTorrent handles your data, permissions, and privacy in compliance with Google Play standards.',
    url: 'https://www.teletorrent.me/privacy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#000000] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[840px] prose prose-invert">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#F5F5F5] mb-4">Privacy Policy</h1>
        <p className="text-[15px] text-[#8D919B] mb-12">Last Updated: August 31, 2026</p>

        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-6">
          Welcome to TeleTorrent (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). TeleTorrent is a specialized file management and download manager application for Android designed to help users organize, search, and download their Saved Messages and permitted media files using the official Telegram API.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-12">
          This Privacy Policy describes how TeleTorrent handles information when you use our Android application and website (
          <a href="https://www.teletorrent.me" className="text-[#F5F5F5] hover:text-[#B7FF32]">
            https://www.teletorrent.me
          </a>
          ). We adhere to strict data minimization principles and the Google Play User Data Policy.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">1. Important Notice Regarding Telegram</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-[#8D919B]">
          <li>
            <strong className="text-[#F5F5F5]">Independent Third-Party Client:</strong> TeleTorrent is developed independently using the official Telegram Database Library (TDLib). It is not affiliated with, endorsed by, sponsored by, or operated by Telegram FZ-LLC.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">No Intermediate Cloud Servers:</strong> TeleTorrent does not operate any proprietary servers, intermediate proxies, or backend cloud databases. All communication occurs directly between your Android device and Telegram&apos;s servers via encrypted MTProto protocols.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">Telegram Privacy Policy:</strong> Your use of Telegram services is governed by the{' '}
            <a
              href="https://telegram.org/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F5] hover:text-[#B7FF32]"
            >
              Telegram Privacy Policy
            </a>
            .
          </li>
        </ul>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">2. Information We Access, Process, and Store</h2>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">A. Telegram Account &amp; Authentication Data</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          To connect your account, you provide your international phone number, one-time verification code (OTP), and two-factor authentication (2FA) cloud password (if enabled).
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-[#8D919B]">
          <li>These credentials are processed exclusively by the local TDLib client and sent directly to Telegram servers.</li>
          <li>TeleTorrent never transmits or stores your passwords, OTP codes, or phone numbers on third-party servers.</li>
          <li>
            Basic profile metadata (Telegram User ID, Display Name, Username, Phone Number, and avatar path) is cached locally on your device in secure storage to enable instant UI loading.
          </li>
        </ul>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">B. Messages, File Metadata, and Downloads</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          When you browse and sync your Saved Messages, the application indexes message and file metadata (file names, sizes, MIME types, chat IDs, message IDs, captions, thumbnail paths) in a local on-device database (Isar) to support fast search and offline filtering.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          Downloaded files are streamed directly from Telegram servers by TDLib into your device storage (such as your device&apos;s <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Download/TeleTorrent</code> folder). TeleTorrent does not upload or mirror your downloaded content anywhere.
        </p>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">C. Problem Reports &amp; Diagnostics</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          If you submit a Problem Report via the app, non-sensitive diagnostic details (app version, Android OS version, device model, and TDLib state) along with your description and optional screenshot are formatted and sent directly to your own Telegram Saved Messages for your records. No data is sent to external support collectors without your initiation.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">3. Advertising &amp; Analytics (Third-Party Services)</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent uses trusted third-party SDKs to deliver advertisements and collect performance analytics:
        </p>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">A. Google AdMob (Google Mobile Ads)</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent displays banner, interstitial, and optional rewarded advertisements (such as for queue priority) powered by Google AdMob. Google AdMob may process:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-[#8D919B]">
          <li>Device and advertising identifiers (Google Advertising ID, Android ID).</li>
          <li>IP address (used to infer coarse location for country/region-level ad serving).</li>
          <li>Ad interaction metrics (impressions, clicks, video completion).</li>
          <li>Diagnostic and fraud-prevention telemetry.</li>
        </ul>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          You can manage or reset your Advertising ID at any time via your Android device settings under <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Settings &gt; Google &gt; Ads</code>. For more details, review{' '}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F5F5] hover:text-[#B7FF32]"
          >
            Google&apos;s Advertising Privacy Terms
          </a>
          .
        </p>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">B. Google Analytics for Firebase</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          We use Google Analytics for Firebase to analyze app stability, crash rates, session duration, and feature engagement. Firebase collects aggregated, pseudonymous telemetry and coarse geographic data (inferred from IP address). Firebase does not collect your Telegram passwords, messages, or downloaded files.
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          Learn more at{' '}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F5F5] hover:text-[#B7FF32]"
          >
            Firebase Privacy and Security
          </a>
          .
        </p>

        <h3 className="text-[18px] font-bold text-[#F5F5F5] mt-6 mb-3">C. Google Fonts</h3>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          The app uses Google Fonts for UI typography. Fonts are fetched securely from Google CDN servers on initial run and cached locally.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">4. Android Permissions</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          TeleTorrent requests only the permissions necessary to deliver its core downloading and file-management capabilities:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-[#8D919B]">
          <li>
            <strong className="text-[#F5F5F5]">INTERNET:</strong> Connects to Telegram servers, downloads files, loads ads, and sends diagnostics.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">ACCESS_NETWORK_STATE:</strong> Detects Wi-Fi vs. Cellular network changes to respect the &quot;Download on Wi-Fi Only&quot; preference.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">STORAGE (READ / WRITE EXTERNAL STORAGE):</strong> Required on Android 12 and below to save downloaded files to shared public storage.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">MEDIA PERMISSIONS (READ_MEDIA_IMAGES, VIDEO, AUDIO):</strong> Used on Android 13+ to attach screenshots to Problem Reports and manage media.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">POST_NOTIFICATIONS:</strong> Displays active download progress bars and completion alerts in your notification shade.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">FOREGROUND_SERVICE &amp; FOREGROUND_SERVICE_DATA_SYNC:</strong> Keeps the download engine alive when the app is minimized.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">WAKE_LOCK:</strong> Prevents the CPU from sleeping during active background file downloading.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">REQUEST_INSTALL_PACKAGES:</strong> Enables launching the system installer when you tap to install a downloaded APK file.
          </li>
        </ul>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">5. We Do Not Sell Personal Information</h2>
        <p className="text-[16px] font-bold text-[#F5F5F5] leading-relaxed mb-4">
          TeleTorrent does not sell, rent, trade, or monetize your personal information, Telegram messages, or downloaded files to data brokers or advertising exchanges.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">6. Data Retention, Logout &amp; Deletion</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-[#8D919B]">
          <li>
            <strong className="text-[#F5F5F5]">Local Data Deletion:</strong> You can clear your local cache, message indexes, and temporary files at any time via <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Settings &gt; Account &amp; Data &gt; Delete Local Data</code>.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">Session Revocation:</strong> Tapping <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Log Out</code> terminates the TDLib session on Telegram servers and clears all local session keys and profile data.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">No TeleTorrent Cloud Account:</strong> Because TeleTorrent operates zero cloud user accounts, there is no remote account database to delete.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">Telegram Account Deletion:</strong> To delete your underlying Telegram account, visit Telegram&apos;s official portal at{' '}
            <a
              href="https://my.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F5] hover:text-[#B7FF32]"
            >
              https://my.telegram.org
            </a>
            .
          </li>
          <li>
            For complete deletion guidelines, visit:{' '}
            <a href="https://www.teletorrent.me/delete-account" className="text-[#F5F5F5] hover:text-[#B7FF32]">
              https://www.teletorrent.me/delete-account
            </a>
            .
          </li>
        </ul>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">7. Security</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          All Telegram communications are secured with Telegram&apos;s MTProto protocol. Communications with third-party SDKs utilize industry-standard HTTPS/TLS encryption. Local app data is isolated within Android&apos;s secure application sandbox.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">8. Children&apos;s Privacy</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          TeleTorrent is not intended for use by children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided data, contact us at <a href="mailto:support@teletorrent.me" className="text-[#F5F5F5] hover:text-[#B7FF32]">support@teletorrent.me</a>.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">9. Changes to This Privacy Policy</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          We may update this Privacy Policy to reflect changes in our app features or regulatory requirements. Any updates will be published on this page with a revised &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">10. Contact Us</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-2">For privacy-related questions or assistance:</p>
        <p className="text-[16px] font-bold text-[#F5F5F5] leading-relaxed mb-2">TeleTorrent Support Team</p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-2">
          Email:{' '}
          <a href="mailto:support@teletorrent.me" className="text-[#F5F5F5] hover:text-[#B7FF32]">
            support@teletorrent.me
          </a>
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-2">
          Website:{' '}
          <a href="https://www.teletorrent.me" className="text-[#F5F5F5] hover:text-[#B7FF32]">
            www.teletorrent.me
          </a>
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-8">
          Community Channel:{' '}
          <a
            href="https://t.me/TeleTorrentApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F5F5] hover:text-[#B7FF32]"
          >
            t.me/TeleTorrentApp
          </a>
        </p>
      </div>
    </div>
  );
}
