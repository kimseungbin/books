# Module 1 Introduction

## Modules

- Cloud Concepts
- Global Infrastructure Overview
- AWs Cloud Security
- Networking & Content Delivery
- Cloud Economics & Billing

## Cloud Concepts

### Introduction to cloud computing

Cloud computing is the on-demand delivery of computer power, database, storage, applications, and other IT resources via
the internet with pay-as-you-go pricing.

Traditional computing model: infrastructure as hardware

Cloud computing model: Infrastructure as software

Cloud service models

- IaaS: More control over IT resources; highest level of control.
- PaaS: Platform as a Service.
- SaaS: Software as a service. Less control over IT resources.

Cloud computing deployment models

- Cloud
- Hybrid
- On-premises (private cloud)

### Advantages of cloud computing

1. Trade capital expense for variable expense: pay-as-you-go pricing
2. Massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money on running and maintaining data center
6. Go global in minutes

### AWS Cloud Adoption Framework

A resource that AWS created to help organizations design and travel an accelerated path to successful cloud adoption.

## AWS Global Infrastructure Overview

### AWS Region

- An AWS Region is geographical area.
- A region typically consists of two or more **Availability Zones**.
- When selecting a Region, consider: Compliance, Latency, Service Availability, and Costs.

### Availability Zones

- A fully isolated partition of the AWS infrastructure.

### Edge Locations

- Lowers latency
- 187 Points of Presence locations

### Features of AWS infrastructure

- Elasticity and scalability
- Fault-tolerance
- High Availability
  - High level of operational performance
  - Minimized downtime
  - No human intervention

## Introduction to AWS IAM (Lab)

### Permissions policies

- A policy defines what actions are allowed or denied for specific AWS resources.
- The basic structure of the statements in an IAM Policy
  - **Effect** says whether to *Allow* or *Deny* the permissions.
  - **Action** specifies the API calls that can be made against an AWS Service.
  - **Resources** defines the scope of entities covered by the policy rule (e.g. specific Amazon S3 bucket or Amazon EC2 instance)

## AWS Cloud Security

### Securing accounts

#### AWS Organization Service

- An account management service.
- Security features
  - Group AWS accounts into organization units (OUs) and attach different access policies to each OU.
  - Integration and support for IAM
  - Use service control policies to establish control over the AWS services and API actions that each AWS account can access.
- Service Control Policies
  - offer centralized control over accounts.
    - limit permissions that are available in an account that is part of an organization
  - Ensures that accounts comply with access control guidelines
  - Similar to IAM permissions policies.

#### AWS Key Management Service

- Enables you to create and manage encryption keys
- Enables you to control the use of encryption across AWS services and in your applications.
- Integrates with AWS CloudTrail to log all key usage.

#### Amazon Cognito

- Adds user sign-up, sign-in, and access control to your web and mobile applications.
- Scales to a million of users.
- Supports sign-in with social identity providers via SAML 2.0

#### AWS Shield

- DDos protection service.
- Minimizes application downtime and latency.
- *AWS Shield Standard* enabled for at no additional.
- *AWS Shield Advanced* is an optional paid service.

### Securing data

#### Encryption

- Encoding data with a secret key, which makes it unreadable.
  - AWS KMS can manage secret keys

- Encryption of data in transit
  - Transport Layer Security (TLS) 1.2
    - Formerly called SSL
    - AWS Certificate manager provides a way to manage, deploy, and renew TLS or SSL certificates.
  - Secure HTTP (HTTPS) is encrypted via TLS

- Securing Amazon S3 buckets and objects
  - Block public access (enabled by default)
  - Bucket Policies
  - Access Control List
  - AWS Trusted Advisor

#### Working to ensure compliance
- Certifications and attestations
- Laws, regulations, and privacy
- Alignments and frameworks

- AWS security compliance programs: provide information about the policies, process, and controls that AWS establishes and operates.
- AWS Config: used to assess, audit, and evaluate the configurations of AWS resources.
- AWS Artifact: provides access to security and compliance reports.

## AWS Trusted Advisor

### Security Groups - Specific Ports Unrestricted

Checks security groups for rules that allow unrestricted access (0.0.0.0/0) to specific ports. Unrestricted access increases opportunities for malicious activity (hacking, denial-of-service attacks, loss of data). The ports with highest risk are flagged red, and those with less risk are flagged yellow. Ports flagged green are typically used by applications that require unrestricted access, such as HTTP and SMTP.

- Green (acceptable): HTTP (80), HTTPS (443), SMTP email (25), SMTPS email (465)
- Red (error): FTP (20, 21), SQL Server (1433, 1434), MySQL (3306), RDP (3389), mini-SQL (4333), PostgreSQL (5432), Oracle (5500)
- Yellow: All other ports

## Networking & Content Delivery

- Networking basics
- Amazon VPC
- VPC networking
- VPC security
- Amazon Route 53
- Amazon CloudFront

### Networking basics

- Classless Inter-Domain Routing
  - Network identifier . Host identifier / fixed bits
  - describes a range of IP addresses
- Open Systems Interconnection (OSI) model
  - Conceptual model used to explain data as it travels over the network

### Amazon VPC

- Enables you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- Gives you control over your virtual networking resources, including:
  - Selection of IP address range
  - Creation of subnets
  - Configuration of route tables and network gateways.
- Enables you to customize the network configuration for your VPC.
- Enables you to use multiple layers of security.
- Belongs to a single AWS Region
- Subnets
  - Range of IP addresses that divide a VPC.
  - Belong to a single Availability Zone.
  - Classified as public and private.
- Maximum IP address range: x.x.x.x/16 (or 65,546 addresses)
- Minimum IP address range: x.x.x.x/28 (or 16 addresses)
- Reserved IP addresses
  - 10.0.0.0 Network address
  - 10.0.0.1 Internal communication
  - 10.0.0.2 Domain Name System (DNS) resolution
  - 10.0.0.3 Future use
  - 10.0.0.255 Network broadcast address
- Public IPv4 address
  - Manually assigned through an Elastic IP address.
  - Automatically assigned through the auto-assign public IP address settings at the subnet level
- Elastic IP address
  - Associated with an AWS account.
  - Can be allocated and remapped anytime.
  - Additional costs might apply.
- Elastic network interface
  - An elastic network interface is a virtual network interface that you can:
    - attach to an instance.
    - detach from the instance, and attach to another instance to redirect network traffic.
  - Its attributes follow when it is reattached to a new instance.
  - Each instance in your VPC has a default network interface that is assigned a private IPv4 address from the Ipv4 address range of your VPC range.

#### Route tables and routes

- A route table contains a set of rules (or routes) that you can configure to direct network traffic from your subnet.
- Each route specifies a destination and a target.
- By default, every route table contains a local route for communication within the VPC.
- Each subnet must be associated with a route table (at most one).

### VPC networking

- Internet gateway: connects a VPC to the internet.
- Network address translation (NAT) gateway
  - provides the ability for instances in a private subnet to connect to the internet.
  - prevent public internet from initiating a connection with those instances.
- VPC sharing
  - Multiple AWS accounts in the same Organization to create application resources in shared, centrally managed Amazon VPCs.
- VPC peering: Connects VPC to other VPCs.
  - IP spaces cannot overlap.
  - Transitive peering is not supported. Traffic can't be passed to a third VPC.
  - Only one peering resource between the same two VPCs.
- AWS Site-to-Site VPN: Connects VPC to remote networks.
- AWS Direct Connection: Connects VPC to a remote network by using a dedicated network connection.
- AWS Transit Gateway: Connects VPCs and on-premises networks through a central hub.

### Security Groups & Network Access Control List

- Security Groups
  - Act at the instance level.
  - Equivalent to firewalls to EC2 instances.
  - Stateful. (return traffic is automatically allowed, regardless of rules)
  - Allow rules only.
- Network ACLs
  - Act at the subnet level.
  - Each subnet in VPC must be associated to an ACL.
  - A subnet can only be associated to one ACL.
  - An ACL can be associated to multiple subnets.
  - Stateless.
  - Allow and Deny rules.

### Amazon Route 53

- Route 53 fail over can redirect to the secondary type record (e.g. static site in S3)

## Cloud Economics and Billing

### Fundamentals of pricing

**3 fundamental drivers of cost with AWS**

- Compute
  - Charged per hour/second
  - Varies by instance type
- Storage
  - Charged typically per GB
- Data Transfer
  - Outbound is aggregated and charged
  - Inbound has no charge (with some exceptions)
  - Charged typically per GB

Custom pricing

AWS Free Tier

### AWS Organizations

- Each organization represents a department or a team.
- Organization Unit

### AWS Support

- Basic
- Developer: Support for early development on AWS
- Business: Customers that run production workloads
- Enterprise: Customers that run business and mission-critical workloads

# Module 6: Compute

- Compute services overview
- Amazon EC2
- Amazon EC2 cost optimization
- Container services
- Introduction to AWS Lambda
- Introduction to AWs Elastic Beanstalk

## AWS Compute services

- Virtual machines
  - Amazon EC2
  - High flexibility
- Serverless
  - AWS Lambda
  - Cloud native architecture
- Container-based
  - Amazon ECS, EKS, ECR, and AWS Fargate
- Platform as a Service
  - AWS Elastic Beanstalk

When selecting compute service...
- Application design
- Usage patterns
- Configuration settings to be managed

## Amazon EC2

### AMIs

- A template that is used to create an EC2 instance
- Contains a Windows or Linux operating system
- Often also has some software pre-installed

AMI choices
- Quick Start: Linux and Windows AMIs that are provided by AWS
- My AMIs: Any AMIs that you crated
- AWS Marketplace: Pre-configured templates from third parties
- Community AMIs: AMIs shared by others; use at your own risk

### Instance Types

- Memory
- Processing power
- Disk space and disk type
- Network performance

Instance type naming
- family name
- generation number
- size
- e.g. t3.nano

Purposes
- General Purpose: T
- Compute Optimized: C
  - Encoding, game server, and so on
- Memory Optimized: R
  - DB, data mining, in-memory-db, and so on
- Networking

### Networking Settings

Can be created in any Subnet

### IAM Role

Can be attached to EC2 instances

### User data

Customizes the runtime environment of an instance

### Storage options

- Configure the root volume
- additional storage volumes (optional)

Storage options
- Amazon Elastic Block Store (EBS)
  - Durable, block-level storage volumes
- Amazon Ec2 Instance Store
  - Temporary storage
  - Buffers, caches...
- Amazon Elastic File System (EFS)

### Tags

- A label assigned to an AWS resource
- Categorizes resources

### Security group

- Virtual firewall
- All outbound traffic is allowed by default

### Key pair

- A key pari consists of...
  - A public key (stored in AWs)
  - A private key

# Module 7: Storage

Block vs Object

- Block storage can change one block, but expensive
- Object storage has to change whole file, but cheap

## Amazon Elastic Block Storage

- Snapshots: saves only new changes since the base snapshot
- Encryption (free)
- Elasticity
- HDD or SSD

## Amazon S3 Glacier

Data archiving service with security, durability, and an extremely low cost.

Uses *vault* instead of bucket.

Retrieval options
- Standard: 3~5 hours
- Bulk: 5-12 hours
- Expedited: 1-5 minutes

Lifecycle policies enable you to delete or move objects based on age. For example, S3 Standard -> S3 IA -> Glacier -> Delete
