import git from "/assets/ggg.png";

export const PROJECTS = [
  {
    id: 1,
    projectName:
      "Terraform Scripts for AWS Coud Solution for 2 Company Websites Using A reverse Proxy Technology",
    projectdescription:
      "This project uses terraform to automate the deployment of a company's infrastructure i.e 2 different websites on AWS.",
    livesite: "https://oddworld.vercel.app/",
    tools:
      "Tools: Domain and certificates,Terraform,Ansible,Packer,AWS Services: RDS, certificates. EFS, Loadbalancers, VPC, etc. ",
    github: "https://github.com/NyerhovwoOnitcha/terraform-aws-19.git",
  },
  {
    id: 2,
    projectName: "End to End CI/CD Pipeline",
    projectdescription:
      "This project uses ansible as a configuration management tool and jenkins as a CI/CD tool to completely automate the deployment of a company's website, database and loadbalancer to production server",
    livesite: "https://jada.vercel.app/",
    tools:
      "Tools: Ansible,Jenkins,Bash scripting,MySQL,Jfrog for Artifactory,SonarQube",
    github:
      "https://github.com/NyerhovwoOnitcha/Project14-End-to-End-CI_CD_Pipeline.git",
  },
  {
    id: 3,
    projectName:
      "Migration to the cloud with containerization using Docker and Docker Compose.",
    projectdescription:
      "Automating the containerization process of an application and pushing of the resulting image to Dockerhub.",
    livesite: "https://dore.vercel.app/",
    tools: "Tools: Ansible,Jenkins,Docker ,Terraform,Packer",
    github: "https://github.com/NyerhovwoOnitcha/Containerization.git",
  },
  {
    id: 4,
    projectName: "A website Solution",
    projectdescription:
      "Implementation of a DevOps solution, a 3 tier web application architcture with a database and a NFS server for shared file storage. Hands on knowledge of linux storage, volumes, partitions, volume groups and logical volumes, file systems and NFS.     ",
    livesite: "https://chatx-bams.vercel.app/",
    tools: "Tools: Linux,NFS,Docker ,Apache,MySQL",
    github: "https://github.com/NyerhovwoOnitcha/TOOLING-WEBSITE-SOLUTION.git",
  },
  {
    id: 5,
    projectName:
      "Load Balancer Solution Digital Certificates with Nginx and SSL/TLS.    ",
    projectdescription:
      "Configure Nginx as a Loadbalancer and configure secure connection using SSL/TLS certificates.    ",
    livesite: "https://el-landingpage.vercel.app/",
    tools: "Tools: Domain,Nginx,AWS,Certbox",
    github:
      "https://github.com/NyerhovwoOnitcha/LOAD-BALANCER-SOLUTION-WITH-NGINX-AND-SSL-TLS.git",
  },

  {
    id: 6,
    projectName: "MORE PROJECTS",
    projectImage: git,
    projectdescription: "Check more project on Github",
    livesite: "#",
    github: "https://github.com/NyerhovwoOnitcha      ",
  },
];
