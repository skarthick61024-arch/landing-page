import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account & Data Deletion - TeleTorrent',
  description: 'Instructions on how to delete your TeleTorrent local data and manage your Telegram account session.',
  alternates: {
    canonical: 'https://www.teletorrent.me/delete-account',
  },
  openGraph: {
    title: 'Account & Data Deletion - TeleTorrent',
    description: 'Instructions on how to delete your TeleTorrent local data and manage your Telegram account session.',
    url: 'https://www.teletorrent.me/delete-account',
    type: 'website',
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="bg-[#000000] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-5 md:px-12 max-w-[840px] prose prose-invert">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[#F5F5F5] mb-4">Account &amp; Data Deletion</h1>
        <p className="text-[15px] text-[#8D919B] mb-12">Last Updated: August 31, 2026</p>

        <div className="bg-[#16181D] border border-[#232730] rounded-2xl p-6 mb-8">
          <h3 className="text-[20px] font-bold text-[#F5F5F5] mb-2">Important Architecture Notice</h3>
          <p className="text-[15px] text-[#8D919B] leading-relaxed">
            TeleTorrent is a client-side Android application that operates directly via the official Telegram API (TDLib).{' '}
            <strong className="text-[#F5F5F5]">
              TeleTorrent does NOT operate its own cloud account database, proprietary user servers, or remote storage.
            </strong>{' '}
            All authentication, message data, and file transfers occur directly between your device and Telegram LLC servers.
          </p>
        </div>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">1. Deleting Your Local TeleTorrent Data</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          To remove all local metadata, file indexes, download records, and cached profile data from your Android device:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[#8D919B]">
          <li>Open the <strong className="text-[#F5F5F5]">TeleTorrent</strong> app on your Android device.</li>
          <li>Tap the <strong className="text-[#F5F5F5]">Settings</strong> tab in the navigation bar.</li>
          <li>Tap <strong className="text-[#F5F5F5]">Account &amp; Data</strong>.</li>
          <li>Tap <strong className="text-[#F5F5F5]">Delete Local Data</strong> and confirm.</li>
        </ol>
        <p className="text-[15px] text-[#8D919B] leading-relaxed mb-8">
          Alternatively, you can clear all app data at any time via Android system settings:{' '}
          <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Settings &gt; Apps &gt; TeleTorrent &gt; Storage &gt; Clear Data</code>.
        </p>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">2. Logging Out &amp; Terminating Your Telegram Session</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          To disconnect TeleTorrent from your Telegram account and revoke the active session key:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[#8D919B]">
          <li>In TeleTorrent, navigate to <strong className="text-[#F5F5F5]">Settings &gt; Account &amp; Data</strong>.</li>
          <li>Tap <strong className="text-[#EF4444]">Log Out</strong>.</li>
          <li>
            This revokes the TDLib session on Telegram servers and immediately wipes your local encryption keys and session tokens.
          </li>
        </ol>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">3. Deleting Your Telegram Account</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          Because your account is managed directly by Telegram LLC, deleting your Telegram account must be performed through Telegram&apos;s official platforms:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-[#8D919B]">
          <li>
            <strong className="text-[#F5F5F5]">Web Deactivation Portal:</strong> Visit Telegram&apos;s official deletion portal at{' '}
            <a
              href="https://my.telegram.org/auth?to=delete"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F5] hover:text-[#B7FF32] underline"
            >
              https://my.telegram.org/auth?to=delete
            </a>{' '}
            and follow the instructions.
          </li>
          <li>
            <strong className="text-[#F5F5F5]">Official Telegram App:</strong> In the official Telegram app, go to{' '}
            <code className="text-[#B7FF32] bg-[#1F2228] px-2 py-0.5 rounded">Settings &gt; Privacy and Security &gt; Delete My Account</code>.
          </li>
        </ul>

        <h2 className="text-[24px] font-bold text-[#F5F5F5] mt-8 mb-4">4. Need Help?</h2>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-4">
          If you have questions about how data is processed or need assistance with data clearance, please contact us:
        </p>
        <p className="text-[16px] text-[#8D919B] leading-relaxed mb-2">
          Email:{' '}
          <a href="mailto:support@teletorrent.me" className="text-[#F5F5F5] hover:text-[#B7FF32]">
            support@teletorrent.me
          </a>
        </p>
      </div>
    </div>
  );
}
