import { Briefcase, Code, Award, User, Mail, Activity, Terminal, ShieldCheck, Server } from "lucide-react";

export interface CareerDetail {
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface MindMapNode {
  id: string;
  label: string;
  icon: any;
  details?: CareerDetail;
  children?: MindMapNode[];
  color?: string;
}

export const mindMapData: MindMapNode[] = [
  {
    id: "career",
    label: "Career",
    icon: Briefcase,
    color: "brand",
    children: [
      {
        id: "observability",
        label: "Observability Engineer",
        icon: Activity,
        details: {
          description: [
            "Currently focused on driving system visibility and reliability across cloud-native and containerized environments. I specialize in performance optimization and proactive incident response.",
            "I work closely with engineering teams to implement robust monitoring strategies that reduce MTTR and improve overall system health."
          ],
          technologies: ["Prometheus", "Grafana", "Kubernetes", "OpenTelemetry", "Go", "Cloud-Native"],
          achievements: [
            "Improved system visibility by 40% through custom dashboarding",
            "Optimized alerting pipelines reducing noise by 25%",
            "Implemented automated incident response workflows"
          ]
        }
      },
      {
        id: "splunk-tse",
        label: "Splunk TSE",
        icon: Terminal,
        details: {
          description: [
            "Supported AWS and GCP integrations for Splunk, troubleshooting complex data ingestion pipelines and add-on configurations.",
            "Expertise in Splunk Operator for Kubernetes and diagnosing issues across distributed cloud infrastructure."
          ],
          technologies: ["Splunk", "AWS", "GCP", "Kubernetes", "Python", "Shell Scripting"],
          achievements: [
            "Resolved 200+ high-priority technical cases related to cloud integrations",
            "Contributed to internal knowledge base for Splunk Kubernetes Operator",
            "Optimized data ingestion for large-scale enterprise customers"
          ]
        }
      },
      {
        id: "sre",
        label: "SRE",
        icon: ShieldCheck,
        details: {
          description: [
            "Initial role focused on system stability, reliability, and operations. Managed incident lifecycles and performance optimization for core services.",
            "Built foundational reliability practices including SLIs/SLOs and automated health checks."
          ],
          technologies: ["Linux", "Kubernetes", "Terraform", "Ansible", "Nginx", "Docker"],
          achievements: [
            "Maintained 99.9% uptime for critical production services",
            "Automated 60% of routine operational tasks using Ansible",
            "Reduced incident resolution time by 30% through better runbooks"
          ]
        }
      }
    ]
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code,
    color: "cyan-400"
  },
  {
    id: "projects",
    label: "Projects",
    icon: Server,
    color: "emerald-400"
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: Award,
    color: "amber-400"
  },
  {
    id: "about",
    label: "About",
    icon: User,
    color: "indigo-400"
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    color: "rose-400"
  }
];
