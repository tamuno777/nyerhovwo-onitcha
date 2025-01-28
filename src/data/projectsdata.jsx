import git from "/assets/ggg.png";

export const PROJECTS = [
  {
    id: 1,
    projectName:
      "Multi-cluster Deployment of a Microservice Application on EKS",
    projectdescription:
      "Implemented a multi-cluster deployment of a microservice application on Amazon EKS using Helm and GitOps for comprehensive monitoring. This project focused on implementing the principles of system architecting, system design, and solutions architecting. Overcame challenges related to cluster management and ensured high availability and scalability.",
    livesite: "https://oddworld.vercel.app/",
    tools:
      "Tools: EKS, ArgoCD, EFK stack, Helm, Docker, Jenkins. ",
    github: "https://github.com/NyerhovwoOnitcha/three-tier-architecture-demo",
  },
  {
    id: 2,
    projectName: "Automating the Deployment of a Company's Infrastructure on AWS Cloud",
    projectdescription:
      "Automated the deployment of a company's infrastructure on AWS Cloud, prioritizing cost efficiency, security, resilience, and scalability. Designed a robust architecture using Terraform and Ansible, and integrated various AWS services to achieve the desired outcomes. This project focused on implementing the principles of system architecting, system design, and solutions architecting.",
    livesite: "https://jada.vercel.app/",
    tools:
      "Tools: Terraform, Ansible, Jenkins, Packer, AWS services (Route53, Certificates, EFS, RDS, ALBs, VPC, etc.)",
    github:
      "https://github.com/NyerhovwoOnitcha/terraform-aws-19",
  },
  {
    id: 3,
    projectName:
      "End-to-End CI/CD Pipeline for Deployment of a PHP-based Application.",
    projectdescription:
      "Developed an end-to-end CI/CD pipeline for the deployment of a PHP-based application. This project improved deployment speed and reliability by integrating various tools and automating the entire process from code commit to production deployment.",
    livesite: "https://dore.vercel.app/",
    tools: "Tools: AWS, Ansible, Jenkins, Sonarqube, Artifactory, MySQL, Scripting.",
    github: "https://github.com/NyerhovwoOnitcha/Project14-End-to-End-CI_CD_Pipeline",
  },
  // {
  //   id: 4,
  //   projectName: "A website Solution",
  //   projectdescription:
  //     "Implementation of a DevOps solution, a 3 tier web application architcture with a database and a NFS server for shared file storage. Hands on knowledge of linux storage, volumes, partitions, volume groups and logical volumes, file systems and NFS.     ",
  //   livesite: "https://chatx-bams.vercel.app/",
  //   tools: "Tools: Linux,NFS,Docker ,Apache,MySQL",
  //   github: "https://github.com/NyerhovwoOnitcha/TOOLING-WEBSITE-SOLUTION.git",
  // },
  // {
  //   id: 5,
  //   projectName:
  //     "Load Balancer Solution Digital Certificates with Nginx and SSL/TLS.    ",
  //   projectdescription:
  //     "Configure Nginx as a Loadbalancer and configure secure connection using SSL/TLS certificates.    ",
  //   livesite: "https://el-landingpage.vercel.app/",
  //   tools: "Tools: Domain,Nginx,AWS,Certbox",
  //   github:
  //     "https://github.com/NyerhovwoOnitcha/LOAD-BALANCER-SOLUTION-WITH-NGINX-AND-SSL-TLS.git",
  // },

  {
    id: 4,
    projectName: "MORE PROJECTS",
    projectImage: git,
    projectdescription: "Check more project on Github",
    livesite: "#",
    github: "https://github.com/NyerhovwoOnitcha      ",
  },
];
