import { DARK, acuminRegular } from "@/app/styles/tokens";

const style: React.CSSProperties = {
  ...acuminRegular,
  color: DARK,
  letterSpacing: "-0.18px",
  lineHeight: 1.5,
};

const linkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

// Shared by every Care subpage so the superscript numbers always point at the same sources
export default function CareReferences({ definitions }: { definitions: string }) {
  return (
    <div
      className="mt-24 lg:mt-48 space-y-6 text-[14px] md:text-[16px] lg:text-[18px] [&_a]:underline"
      style={style}
    >
      <p>Definitions: {definitions}</p>
      <p>
        References: 1. American Cancer Society. (2026).{" "}
        <a href="https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/american-cancer-society-recommendations-for-the-early-detection-of-breast-cancer.html" {...linkProps}>
          American Cancer Society recommendations for the early detection of breast cancer.
        </a>{" "}
        American Cancer Society. 2. American Cancer Society. (2026).{" "}
        <a href="https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/breast-cancer-signs-and-symptoms.html" {...linkProps}>
          Signs and symptoms of breast cancer
        </a>
        . American Cancer Society. 3. Centers for Disease Control and Prevention. (2026).{" "}
        <a href="https://www.cdc.gov/breast-cancer/symptoms/index.html" {...linkProps}>
          Symptoms of breast cancer.
        </a>{" "}
        Centers for Disease Control and Prevention. 4. Centers for Disease Control and
        Prevention. (2026).{" "}
        <a href="https://www.cdc.gov/breast-cancer/risk-factors/index.html" {...linkProps}>
          Breast cancer risk factors.
        </a>{" "}
        Centers for Disease Control and Prevention. 5. Centers for Disease Control and
        Prevention. (2024).{" "}
        <a href="https://www.cdc.gov/breast-cancer/about/mammograms.html" {...linkProps}>
          About mammograms
        </a>
        . Centers for Disease Control and Prevention. 6. Cleveland Clinic. (2024).{" "}
        <a href="https://my.clevelandclinic.org/health/diagnostics/21496-breast-ultrasound" {...linkProps}>
          Breast ultrasound: What it is, purpose, procedure &amp; results
        </a>
        . Cleveland Clinic. 7. Cleveland Clinic. (2024).{" "}
        <a href="https://my.clevelandclinic.org/health/diagnostics/4877-mammogram" {...linkProps}>
          Mammogram: What it is, purpose, procedure, results &amp; types
        </a>
        . Cleveland Clinic. 8. Mayo Clinic. (2023).{" "}
        <a href="https://www.mayoclinic.org/tests-procedures/breast-mri/about/pac-20384809" {...linkProps}>
          Breast MRI.
        </a>{" "}
        Mayo Clinic.
      </p>
    </div>
  );
}
