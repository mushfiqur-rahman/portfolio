import ServicePackageCard from "@/components/ServicePackageCard";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Remote IT Services</title>
        <link rel="canonical" href="/services" />
        <meta
          name="description"
          content="Professional IT services like email migration, DNS config, WordPress support and more."
        />
        <meta
          name="keywords"
          content="dns management, dns configuration, email deliverability, email migration, data migration, freelancer, website development, domain migration, ssl certification, godaddy office 365 to microsoft 365, IMAP, squarespace, google worksapce, gsuit, office 365, remote it support, shopify developer, it support engineer"
        />
      </Head>

      <section className="max-w-7xl mx-auto px-4 py-28">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Service Packages
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Professional email, domain, and web support for US/UK clients
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServicePackageCard
            title="Figma to Next JS"
            price="200"
            features={[
              "5 Section",
              "Landing Page",
              "PWA",
              "Pagespeed Optimized",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Webmail to Google Workspace"
            price="149"
            features={[
              "Google Workspace setup",
              "Email migration from cPanel/IMAP",
              "DNS (SPF, DKIM, DMARC)",
              "Device setup & post-migration test",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Webmail to Microsoft 365"
            price="179"
            features={[
              "Microsoft 365 setup",
              "Email migration from IMAP",
              "Outlook/mobile access setup",
              "DNS & mail flow test",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Google Workspace to Microsoft 365"
            price="199"
            features={[
              "Mailbox + calendar + contacts",
              "DNS switch + authentication",
              "User access setup",
              "7-day post-support",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="GoDaddy M365 to M365 Tenant"
            price="249"
            features={[
              "Tenant to tenant migration",
              "DNS & domain release",
              "Outlook reconfig",
              "Final testing",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Email Deliverability Fix"
            price="149"
            features={[
              "Blacklist & DNS audit",
              "SPF, DKIM, DMARC fix",
              "Domain reputation repair",
              "Cold email readiness",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="WordPress Maintenance"
            price="99"
            features={[
              "Update themes & plugins",
              "Security & speed check",
              "Contact form & SMTP fix",
              "Daily/weekly backups",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="DNS Configuration"
            price="79"
            features={[
              "A, MX, CNAME, TXT record setup",
              "SPF/DKIM/DMARC",
              "Cloudflare, GoDaddy, etc.",
              "DNS audit report",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Google Workspace Admin"
            price="99"
            features={[
              "Admin console help",
              "User add/remove",
              "Policy & access controls",
              "Ongoing maintenance",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Microsoft 365 Email Config"
            price="99"
            features={[
              "Outlook + Mobile setup",
              "SPF/DKIM/DMARC records",
              "Mail flow rules",
              "Admin portal setup",
            ]}
            cta="Get Started"
          />
          <ServicePackageCard
            title="Remote Help Desk"
            price="40/hr"
            features={[
              "Zoom/AnyDesk support",
              "DNS/Email troubleshooting",
              "Webmail & account setup",
              "US/UK time support",
            ]}
            cta="Get Started"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
