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

# Module 8: Database

## Amazon Relational Database Service

Managed RDB providing cost-efficient and resizable capacity.
Features
- Managed service
- Multiple database engine support
- VPC support: can use ACLs
- High Availability: uses Multi-AZ deployment
- Scalability: uses replica instances 

## Amazon DynamoDB

- NoSQL
- Virtually unlimited storage

## Amazon Redshift

- Data warehouse service
- Divides into **leader node** and **compute nodes**
- Big data processing

# Module 9: Cloud Architecture

## AWS Well-Architected Framework

Designed to help you build the most secure high-performing, resilient, and efficient infrastructure possible.
Role of a cloud architect
- Engaging with decision makers to identify the business goal and the capabilities that need improvement
- Ensuring alignment between technology deliverables of a solution and the business goals
- Working with delivery teams that are implementing the solution to ensure that the technology features are appropriate

## Operational Excellence Pillar

It focuses on the ability to run and monitor systems

- Managing and automating changes
- Responding to events
- Defining standards to successfully manage daily operations

Operational excellence design principles
- Perform operations as code
- Annotate documentation
- Make frequent, small, reversible changes
- Refine operations procedures frequently
- Anticipate failure
- Learn from all operational events and failures

## Security Pillar

Ability to protect information, systems, and assets.

Security design principles
- Implement a strong identity foundation (the least privilege)
- Enable traceability
- Apply security at all layers
- Automate security best practices
- Protect data in transit and at rest
- Keep people away from data
- Prepare for security events

## Reliability Pillar

Ability of a system to recover from infrastructure failures

Reliability design principles
- Test recovery procedures
- Automatically recover from failure
- Scale horizontally to increase aggregate system availability
- Stop guessing capacity
- Manage change in automation

## Performance Efficiency Pillar

Utilizing IT and computing resources efficiently.

Performance Efficiency design principles
- Democratize advanced technologies
  - In cloud, advanced technologies like NoSQL machine learning can be consumed by any team.
- Go global in minutes
- Use serverless architectures
- Experiment more often
- Have mechanical sympathy

## Cost Optimization Pillar

Ability to run systems  to deliver business value at the lowest price point.

Cost optimization design principles
- Adopt a consumption model
- Measure overall efficiency
- Stop spending money on data center operations
- Analyze and attribute expenditure
- Use managed and application-level services to reduce cost of ownership

## Sustainability Pillar

Considering long-term environmental, economic, and societal impact of business activities.

Sustainability design principles
- Understanding the impact
- Establish sustainability goals
- Maximize utilization
- Anticipate and adopt more efficient hardware and software offerings
- Use managed services
- Reduce the downstream impact of the cloud workloads

## Reliability and high availability

Reliability
- A measure of system's ability to provide functionality when desired by the user
- Probability that the entire system will function as intended for a specified period
- Mean time between failures (MTBF) = total time in service/number of failures

Availability
- Normal operation time / total time
- A percentage of uptime over time (e.g. 99.9%)
- Number of 9s

Highly available system
- System can withstand some measure of degradation while still remaining available
- Downtime is minimized
- Minimal human intervention is required

Availability tiers

| Availability | Max Disruption (per year) | Application Category                                       |
|--------------|---------------------------|------------------------------------------------------------|
| 99%          | 3 days 15 hours           | Batch processing, data extraction, transfer, and load jobs |
| 99.9%        | 8 hours 45 minutes        | Internal tool, like knowledge management, project tracking |
| 99.95%       | 4 hours 22 minutes        | Online commerce, point of sale                             |
| 99.99%       | 52 minutes                | Video delivery, broadcast systems                          |
| 99.999%      | 5 minutes                 | ATM transactions, telecommunications systems               |

Factors that influence availability
- Fault tolerance
  - built-in redundancy
  - ability to remain operational
- Scalability
  - accommodate increases in capacity needs
- Recoverability
  - restoring service

## AWS Trusted Advisor

Online tool providing real-time guidance to help provisioning resources following AWS best practices

# Module 10: Auto Scaling and Monitoring

## Elastic Load Balancing

Distributes incoming application or network traffic across multiple targets.

Examples
- EC2 instances
- containers
- IP addresses
- Lambda functions

### Application Load Balancer

Operates at the application level, Open Systems Interconnection (OSI) model layer 7.
It routes ***traffic*** to targets.
Ideal for balancing of HTTP and HTTPS

### Network Load Balancer

Operates at the network transport level, Open Systems Interconnection (OSI) model layer 4.
It reroutes ***connections*** to targets based on IP data.
Ideal for balancing both Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) traffic.

### Classic Load Balancer

Provides basic load balancing across multiple EC2 instances.
Operates at both the application level and the network transport level.

## Amazon CloudWatch

It...
- Monitors
- Collects and tracks
- Alarms
- Events

## Amazon EC2 Auto Scaling

Computing power is programmable resource.

### Automatic scaling

Useful for predictable workloads
Auto-scaling group: logical grouping of EC2 instances.

- Manual scaling: uses min/max/desired capacity
- Scheduled scaling
- Dynamic scaling: scaling policies
- Predictive scaling: AWS Auto Scaling (uses historic data)

# Week 3

## Module 2: Cloud Architecting Introduction

### What is cloud architecting?

Cloud architecture is the practice of applying cloud characteristics to a solution.
The solution uses cloud services and features to meet an organization's technical needs and business use cases.

### The Amazon Web Services Well-Architected Framework

WAF describes key concepts, design principles, and architectural best practices for designing and running workloads in the AWS Cloud.

Well-Architected Framework pillars
- Operational Excellence: deliver business value
  - Using CloudWatch to monitor the health and performance of workloads; initiating automated responses to adjust the resources
- Security: Protect and monitor systems
- Reliability: recover from failure and mitigate disruption
- Performance Efficiency: Use resources sparingly
- Cost Optimization: Eliminate unneeded expense
- Sustainability: Minimize environmental impacts

### Best practices for building solutions on AWS

- Enable scalability
- Automate the environment
- Treat resources as disposable
- Use loosely coupled components
- Design services, not servers
- Choose the right database solution
- Avoid single points of failure
- Optimize for cost
- Use caching
- Secure the entire infrastructure

## Module 3: Adding a Storage Layer

Creating static website on S3

### Using Amazon S3

Object storage service
- unlimited amounts of unstructured data
- 5TB max file size of a single object
- All objects have a REST-accessible globally unique URL
- All objects have a key, version ID, value, metadata, and subresources

Amazon S3 benefits
- Durability: 11 9s of durability
- Availability: 9s availability
  - Data can be temporarily unavailable, but not lost if durable
- Scalability
  - virtually unlimited capacity
- Security
- Performance

Use cases
- media hosting
- hosting static websites
- data store for computation and analytics
- back up and archive critical data

Data consistency model
S3 provides 2 different data consistency models
1. Read-After-Write consistency: PUTS of new objects in S3 bucket
2. Eventual consistency for overwrite PUTS and DELETES
   - an overwrite or a delete action can take time to propagate to all copies of an object across S3
   - when updating an existing file and then read it immediately, the older version might be retrieved

### Storing data in Amazon S3

Storage Classes
- S3 Standard
- S3 Standard IA
- S3 One Zone IA
- S3 Glacier / Deep Archive

### Moving data to and from Amazon S3

1. AWS Management Console
2. AWS CLI
3. AWS SDK

#### Multipart upload

- Can upload a single object (from 5 MB to 5 TB) as a set of parts
- Each part is a contiguous portion of the object's data
- After all parts of the object are uploaded, S3 assembles these parts and creates the object

Main benefits
- Improved throughput
- Quick recovery from any network issues
- Ability to pause and resume object uploads
- Ability to begin an upload before you know the final object size
- Ability to upload large objects

#### Transfer Acceleration

- Accelerates S3 data transfers
- Uses optimized network protocols and the AWS edge infrastructure
- Provides the following typical improvement
  - improves 50% ~ 500% for cross-country transfer of larger objects
  - Can go even higher under certain conditions

### Using AWS DataSync

Automates and accelerates the copying of large amounts of data to and from AWS Cloud storage services.
It is used to transfer data between on-premises storage and the AWS Cloud, and transfer data between AWS Cloud storage services.

Features and Benefits
- Seamless data transfer
  - Can perform both one-time data transfers and automated ongoing transfers
  - Each data transfer task provides a one-way transfer between the source storage location and the destination storage location.
- Fully managed service
  - Optimizes on how, when, and what data is sent over the network.
- Secure and Compliant
  - Uses Transport Layer Security version 1.2 (TLS 1.2)
  - Each task performs integrity checks
  - AWS Key Management Service integrates with AWS storage services to encrypt data at rest in AWS Cloud storage.
- Integration with AWS services
  - Integrated with S3, EFS, and FSx.
  - Also integrated with IAM, CloudWatch, CloudTrail, and network connections (Direct Connect, Private Link, Transit Gateway)
- Const-effective
  - Const is predictable
- Simple to use

### Using AWS Storage Gateway

A Hybrid storage service that enables on-premises applications to use AWS Cloud storage.

- Durable storage in the AWS Cloud
- Standard storage protocols
- Fully managed cache
- Optimized and secure data transfer
- Hardware or software implementation

- S3 File Gateway
  - Can store and retrieve files as objects in S3 by using the NFS or SMB protocol.
  - It benefits from S3 features: versioning, cross-Region replication, and lifecycle management.
- Volume Gateway
  - Stores in S3 using iSCSI protocol
- Tape Gateway
  - Can replace on-premises physical tapes.

### Choosing Regions for your architecture

- Data residency and regulatory compliance
- Proximity of users to data
- Availability
- Cost-effectiveness

## Module 3: Adding a Compute Layer

### Amazon EC2

- Provides virtual machines (servers)
- Provisions servers in minutes
- Can automatically scale capacity up or down as needed with Amazon EC2 Auto Scaling
- Lets you pay only for the capacity that you use

### EC2 Instances

- An instance is a virtual machine that runs on a physical host
- Can choose different configs of CPU and memory capacity
- Supports different storage options
- Provides network connectivity

### Instance type

- CPU, memory, storage, and network performance
- Type naming: Family, generation, additional capabilities, and size
- General purpose
  - Web or application servers
  - Gaming servers
  - Caching fleets
  - Analytics applications
  - Development or test environments
  - M, T A families
- Compute optimized
  - Batch processing
  - Distributed analytics
  - High performance computing (HPC)
  - Ad serer engines
  - Multiplayer gaming
  - Video encoding
  - C, C5n families
- Memory optimized
  - In-memory caches
  - High-performance databases
  - Big data analysis
  - R, X, HMI families
- Accelerated computing
  - Machine learning, artificial intelligence
  - HPC
  - Graphics
  - P, G, F families
- Storage optimized
  - High-performance databases
  - Real-time analytics
  - Transactional workloads
  - NoSQL databases
  - Big data
  - Data warehouses
  - Log processing
  - I (for I/O), D, H families
- AWS Compute Optimizer provides recommendations for optimizing the instance type for running instances.

### Adding storage to an EC2 instance

Only `Instance store` and `EBS (SSD-based)` can be used for *Root Volume*.
While those two can be used for *Data Volume*, but they can be only used for a single instance.
For data accessible from multiple instances, use `EFS` or `FSx`

- Instance store
  - non-persistent storage
  - the data is stored on the *same physical server* where the instance runs
  - block-level storage
  - uses HDD or SSD
  - the data is lost when the instance is stopped or terminated
  - example use cases: buffers, cache, and scratch data
- EBS
  - persistent block-level storage
  - can attach to any instance in the same AZ
  - uses HDD or SSD
  - can be encrypted
  - supports snapshots that are persisted to S3
  - data persists independently of the instance state
  - example use cases: stand-alone database, general application data storage
- EFS
  - fully managed elastic file system
  - scales automatically up or down as files are added and removed
  - petabytes of capacity
  - supports Network File System (NFS) protocols
  - example use cases: home directories, file system for enterprise applications, DB backups, and so on

### Pricing Options

1. On-Demand Instances
   - Spiky workloads
   - workloads experimentation
2. Reserved Instances
   - 1-year or 3-year commitment
   - Committed and steady-state workloads
3. Savings Plans
   - more flexibility in exchange for a $/hour commitment
   - EC2, Fargate, and Lambda
4. Spot Instances
   - Fault-tolerant, flexible, stateless workloads
5. Dedicated Hosts
   - workloads that require the use of one's own software licenses or single tenancy to meet compliance requirements

## Module 3: Adding a Database Layer

### Database layer considerations

1. Scalability
2. Total storage requirements
3. Object size and type
4. Durability

### Amazon RDS

#### Instance class

A database instance is the basic building block of RDS. It represents an isolated database environment that is running in the cloud.

Families
- T family
  - Burstable
  - Moderate networking performance
  - Smaller or variable workload
- M family
  - General-purpose
  - High networking performance
  - CPU-intensive workload
- R family
  - Memory-optimized
  - High networking performance
  - Query-intensive, high connection counts workloads

#### Data size

- Aurora scales up to 64 TB
- MySQL, MariaDB, Oracle, and PostgreSQL scale up to 32 TB
- Microsoft SQL scales up to 16 TB

#### Storage performance

- SSD
  - baseline of 3 IOPS
  - maximum 3,000 IOPS

### Amazon DynamoDB

Consistency
- Eventual
  - Default setting
  - All copies of data usually reach consistency within 1 second
- Strong
  - Optional
  - All reads to return a result that reflects all writes before the read

### Database Security Controls

- VPC
- IAM
- Security Groups
- Secure Sockets Layer (SSL)
- RDS encryption
- DynamoDB Encryption
  - Encryption at rest
  - Encryption in transit

### Migrating data into AWS databases

#### AWS Data Migration Service (DMS)

- Can either be used for one-time or continuous data replication
- AWS Schema Conversion Tool (AWS SCT)
  - supports changing the database engine

Typical migration major steps
1. Create a target database
2. Migrate the database schema
3. Set up the data replication process
4. Initiate the data transfer and confirm completion
5. Switch production to the new database (for one-time migrations)

### AWS Snowball Edge

- When database is too large
- Connection is too slow
- Privacy and security concerns

Steps
1. AWS SCT
2. Snowball Edge
3. Shipping process
4. Snowball edge
5. S3 Bucket
6. AWS DMS
7. Target Database

AWS Schema Conversion Tool supports the database engine changes

#### Heterogeneous migration

# Week 4

## Module 1: Creating a Networking Environment

### Creating an AWS networking environment

- Amazon VPC
  - Provisions a logically isolated sections of the AWS Cloud.
  - AWS resources are launched within a VPC.
- VPC deployment
  - A VPC belongs to a single AWS Region.
  - A VPC spans all the Availability Zones in a Region, so it can host supported resources from any Availability Zone within its Region.
  - **A VPC can be extended to AWS Local Zones to place resources closer to end users.**
- IP addresses
  - Block size must be between /28 (16 IP addresses) and /16 (65,536 IP addresses)
- Subnets: Dividing the VPC
  - A VPC can be divided into one or more subnets.
  - A subnet is a segment or partition of a VPC's IP address range where a group of resources can be allocated.
  - Subnets are **not isolation boundaries around applications**. Instead, they are containers for routing policies.
  - Optionally, it is possible to add subnets in a *Local Zone*.
  - AWS reserves the first four IP addresses and the last IP address in each subnet CIDR block.

### Connecting AWS networking environment to the internet

- Internet gateway
  - A VPC component which allows communication between resources in a VPC and the internet.
  - Horizontally scaled, redundant, and highly available.
  - Provide a target in a VPC's route tables for internet bound traffic.
- Applying Internet Gateway (To make a subnet public)
  - Create an Internet Gateway
  - Attach it to the VPC
  - Update the route table associated with the subnet
    - A route table contains set of rules called routes.
    - Routes direct network traffic.
    - When creating a VPC, a main route table is created automatically.
    - At first, every route table, including the main route table, contains a single local route.
      - The local route enables communication for all the resources in the VPC.
      - The local route can't be modified.
    - Custom route tables can be added.
    - Multiple subnets can use the same route table.
    - Only one route table can be associated to a subnet.
  - Elastic IP addresses
    - Static and public IPv4 addresses associated with an AWS account.
    - By associating Elastic IP address instead of Private IP addresses of instances, it is possible to switch traffic to desired target without changing target IP.
- NAT gateways
  - NAT gateways give instances in the private subnet the ability to initiate outbound traffic to the internet or other AWS services.
  - Enables instances in a private subnet to initiate outbound traffic to the internet or other AWs services.
  - Prevent private instances from receiving inbound connection requests from the internet.
- Bastion hosts
  - Reduces risk when connecting some public access to private subnet.
  - A server whose purpose is to provide access to a private network from an external network.
  - Must minimize the chances of penetration.

### Securing AWS networking environment

- Security Groups
  - Stateful firewalls
  - Act at the level of the instance or network interface
  - By default, block all inbound traffic and allow all outbound traffic.
- Chain of security groups
  - When setting inbound and outbound rules to allow traffic to flow from the top tier to the bottom tier of the architecture, it is possible to chain security groups together to isolate a security breach.
- Network Access Control Lists
  - network ACLs
  - Act at the subnet level
  - By default, allow all inbound and outbound traffic
  - Stateless firewalls that requires explicit rules for both inbound and outbound traffic.
  - Can be associated to multiple subnets
  - A subnet can be associated to only one network ACL.

## Module 2: Connecting Networks

### Connecting a remote network with AWS Site-to-Site VPN

#### AWS Site-to-Site VPN

- AWS Site-to-Site VPN securely connects on-premises and VPCs.
- Each Site-to-Site VPN connection uses Internet Protocol security (IPsec) communications to create encrypted virtual private network (VPN) tunnels between two locations.
- A VPN tunnel is an encrypted link where data can pass from the customer network to or from AWS.
- Uses gateways that are connection hubs to transfer data between different systems.
- AWS side uses a virtual private gateway or a transit gateway
- On-premise side uses customer gateway
- Provides two VPN tunnels across multiple Availability Zones.
  - If one tunnel goes down, traffic will still get delivered to the VPC.
- Charged for each VPN connection hour.

#### Static and dynamic routing

- When creating a Site-to-Site VPN connection, the type of routing must be specified.
  - Static routing
    - 50 non-propagated routes per route table by default up to a maximum of 1,000 non-propagated routes.
  - Dynamic routing
    - The VPN device must support Border Gateway Protocol (BGP).
    - supports maximum 100 propagated routes per route table.
  
### AWS VPN CloudHub

Connects multiple VPNs.

- Remote sites can communicate with each other and not just the VPC.
  - Sites must not have overlapping IP ranges.
- Establishes multiple VPN connections from multiple customer gateway devices to a single virtual private gateway.
- Maintains high availability.

### Connecting remote network with AWS Direct Connect

DX

- Provides dedicated, private network connection capacity of either 1 Gbps or 10 Gbps.
- Hybrid environments
- Transferring large datasets
- Network performance predictability
- Security and compliance
  - Private virtual interface: Enables access to VPCs.
  - Public virtual interfaces: Enables access to public AWS resources such as S3.
- Availability can be increased by backup VPN connection.

### VPC Peering

- One-to-one network connecting between two VPCs
- No gateways, VPN connections, and separate network appliances needed.
- Highly available connections
- No single point of failure or bandwidth bottleneck.
- Traffic always stays on the global AWs backbone.
- Can be established between different AWS accounts.
- Cannot have overlapping CIDR blocks.
- Can have only one peering resource between any two VPCs.
- Do not support transit peering relationships.

### Scaling VPC network with AWs Transit Gateway

- With Transit Gateway, VPCs and on-premises networks can be connected to a single gateway.
- Transit Gateway uses a hub-and-spoke model to simplify VPC management and reduce operational costs.

## Module 3: Securing User and Application Access

### Account users and IAM

- Securely control individual and group access to AWS resources
- Integrates with other AWS services
- Federated identity managedment
- Granular permissions
- Support for multi-factor authentication

- IAM user
  - can call APIs
  - given set of security credentials
- IAM group
  - collection of users
- IAM policy
  - defines which resources can be accessed and the level of access to each resource.
  - **Permissions** are specified in an IAM policy
    - A document formatted in JSON.
    - Defines which resources and operations are allowed
    - Best practice: follow the *principle of least privilege*.
    - identity-based policy: attach to an IAM principal.
      - AWS managed, Customer managed, inline policies
    - Resource-based policy: attach to an AWS resource.
      - Always an inline policy
    - Permissions determination
      1. Is the permission explicitly denied?
      2. Is the permission explicitly allowed?
      3. Implicit deny.
    
- IAM role
  - Mechanism to grant temporary access for making AWS service requests.
  - Assumable by a person, application, or service.

IAM Policy


### Organizing users

IAM group
- A collection of IAM users.
- Manages permissions for a collection of users rather than for each individual user.

IAM roles
- Provides temporary security credentials.
- Is not uniquely associated with one person.
- Is assumable by a person, application, or service.
- Is often used to delegate access.
- Use cases
  - Provide AWS resources with access to AWS services
  - Provide access to externally authenticated users.
  - Provide access to third parties.
  - Switch roles to access resources in own AWS account or any other AWs account.

#### Role-based access control (RBAC)

- Traditional approach to access control
- Grant users specific permissions based on job function. Such as database administrator.
- Create a distinct IAM role for each permission combination.
- Update Permissions by adding access for each new resource. It can become time-consuming to keep updating policies.

#### Attribute-based access control (ABAC)

- Highly scalable approach to access control.
  - Attributes are a key or key-value pair, such as a **tag**.
  - Example attributes
    - Team = Developers
    - Project = Unicorn
- Permissions (policy) rules are easier to maintain with ABAC than with RBAC.
- Benefits
  - Permissions automatically apply, based on attributes.
  - Granular permissions are possible without a permissions update for every new user or resource.
  - Fully auditable.

### Federating users

Identity federation
- User authentication completed by a system that is external to the AWS account.
  - e.g. corporate directory
- It provides a way to allow access through existing identities, without creating IAM users.

Identity federation options
- AWS STS
  - Public identity service providers (IdPs).
  - Custom identity broker application.
- Security Assertion Markup Language (SAML).
- Amazon Cognito

IdP authentication overview
1. User access identity broker via application.
2. Identity broker authenticates user.
3. Requests temporary credentials from AWS STS.
4. Temporary credentials returned to application.

Amazon Cognito
- Fully managed authentication, authorization, and user management for web and mobile application.
- OpenID Connect (OIDC) compatible.
- User pools: user directory.
- Identity pools: users can obtain temporary AWS credentials to access AWS services or resources.

### Multiple accounts

Multiple accounts, a VPC in each Account.

Advantages of multiple accounts
- Isolate business units or departments.
- Isolate development, test, and production environments.
- Isolate auditing data, recovery data.
- Separate accounts for regulated workloads.
- Easier to trigger cost alerts for each business unit's consumption.

AWS Organization
Centrally manage and enforce policies across multiple AWS accounts.
- Group-based account management.
- Policy-based access to AWS services.
- Automated account creation and management.
- Consolidated billing.
- API-based.

Primary account in AWS Organizations
- Create a hierarchy of organizational units (OUs).
- Assign accounts to OUs as member accounts.
- Define service control policies (SPCs) that apply permissions restrictions to specific member accounts.
- Attach the SPCs to root, OUs, or accounts.
