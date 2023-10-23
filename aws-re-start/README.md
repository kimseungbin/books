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
