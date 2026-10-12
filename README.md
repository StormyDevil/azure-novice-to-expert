# Azure Certification Learning Path

An Azure-only credential journey for technical consultants and solution architects who are new to Azure.

The path starts with infrastructure, then moves through data, AI, and applications and innovation. It combines Microsoft Certifications with Microsoft Applied Skills. It is intentionally not time-based: progress when you can explain the concepts, complete the hands-on work, and pass the relevant assessment.

> Credential catalog checked against Microsoft Learn on 12 October 2026. Microsoft changes exams and credentials regularly; review the [credential lifecycle guidance](docs/credential-lifecycle.md) before booking an exam.

## Learning order

| Stage | Track | Primary credential outcome |
|---|---|---|
| 0 | [Azure foundation](docs/00-foundation.md) | Microsoft Certified: Azure Fundamentals (AZ-900) |
| 1 | [Infrastructure](docs/01-infrastructure.md) | Azure Administrator Associate, then Azure Solutions Architect Expert |
| 2 | [Data](docs/02-data.md) | Azure Data Fundamentals, then Azure Database Administrator Associate |
| 3 | [AI](docs/03-ai.md) | Azure AI Fundamentals, Azure AI Engineer Associate, then Machine Learning Operations Engineer Associate |
| 4 | [Apps and innovation](docs/04-apps-and-innovation.md) | Azure Developer Associate, then DevOps Engineer Expert |

## Recommended route

```text
AZ-900
  |
  +--> AZ-104 --> AZ-700 (optional depth) --> AZ-305
  |
  +--> DP-900 --> DP-300
  |
  +--> AI-901 --> AI-103 --> AI-300
  |
  +--> AZ-204 --> AZ-400
```

The route is guidance, not a claim that every exam has a formal prerequisite. The track pages distinguish required prerequisites from recommended preparation.

## How to use this repository

1. Complete the tracks in the listed order.
2. Use the certification page as the source of truth for eligibility and exam availability.
3. Use the study guide to define the current assessment scope.
4. Add the suggested Applied Skills credentials where they support your role.
5. Build evidence as you learn: architecture diagrams, decision records, deployment templates, operational runbooks, and demos.

## What “expert” means here

Microsoft assigns levels to credentials, not to this repository. The two expert certification outcomes in this path are:

- Microsoft Certified: Azure Solutions Architect Expert.
- Microsoft Certified: DevOps Engineer Expert.

Data and AI currently culminate in role-based associate credentials and focused Applied Skills within this Azure-only scope. They are not relabeled as expert credentials.

## Scope

Included:

- Active Azure-focused Microsoft Certifications.
- Active Azure-focused Microsoft Applied Skills.
- Official Microsoft Learn certification, study-guide, and assessment pages.

Excluded:

- Microsoft 365, Dynamics 365, Power Platform, Fabric, and security credentials that are not Azure-specific.
- Retired exams such as DP-100 and AI-102.
- Vendor training and unofficial exam material.
- Digital sovereignty-specific content.

## Repository maintenance

The link-check workflow checks Markdown links on changes and on a schedule. A successful link check proves that a page responds, not that Microsoft has kept the credential active. See [credential lifecycle](docs/credential-lifecycle.md) for the manual review process.

Contributions are welcome; read [CONTRIBUTING.md](CONTRIBUTING.md).
