---
title: Platform Features
description: A guide in my new CREDEBL docs site.
---

With CREDEBL, end-to-end credential management can be enabled with these features.

- [Onboarding of Organization](#onboarding-of-orgenization-and-configuration)
- [Onboarding of Users](#onboarding-of-users)
- [Wallet](#wallet)
- [Schema](#schema)
- [Credential Definition](#credential-definition)
- Digital Credential:[Issuance and Verification](#issuance-and-verification)
- [Secure Data Sharing](#secure-data-sharing)
- [Mobile Wallet for Holder](#mobile-wallet-for-enduser)
- [Identity Proofing](#identity-proofing)






##### User Registration

The platform presents an efficient user registration through email-based verification. A single verification email is sent to users to confirm their identities, enhancing account security and safeguarding sensitive data. Furthermore, the platform offers secure authentication mechanisms such as passwords and passkey for strong user verification. These measures establish a multi-layered approach to user authentication, mitigating the potential for unauthorized access and preserving the security of sensitive user information.


##### Onboarding of Orgenization and Configuration

The platform facilitates the smooth integration and enrollment of organizations into the decentralized identity platform, enabling them to establish a reliable presence and engage in secure digital interactions. This expedites the process for organizations to join the platform.


##### Onboarding of users

The platform presents an efficient user onboarding procedure through email-based invitation. A single invitation email is sent to users to join the platform send by other users. Furthermore, the platform offers secure authentication mechanisms such as passwords and passkey for strong user verification. These measures establish a multi-layered approach to user authentication, mitigating the potential for unauthorized access and preserving the security of sensitive user information.


##### Wallet
ADEYA wallet is a user-friendly mobile application designed to store and manage digital identities. It also facilitates secure data sharing among trusted connections, all while ensuring privacy. Harness the capabilities of decentralized identity components developed using DIDComm protocols and cutting-edge code sourced from Hyperledger Aries Bifold.Here are some of the key features of using an ADEYA wallet:Open Standards: ADEYA wallet is built entirely on open standards, such as Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).Interoperable: Built on open standards and technologies such as DIDs, VCs, Aries, W3C JSON-LD VCs, AnonCreds and more.  Ensures that you won’t face vendor lock-in and will interoperate with global players.Privacy-by-design: The holders consent to what information they share with the verifying parties. Leverage privacy-preserving data exchanges using compounding, predicates, selective disclosure, restrictions, connectionless and more.Multi-language Support: Easy customization and multi-lingual support through localization and internationalization implementation.DIDComm Messaging: Communicate securely and privately while conducting various trust tasks.
##### Schema
A schema serves as a machine-readable blueprint outlining a collection of attribute data types and formats. These attributes are utilized for the claims within a credential. For instance, envision a schema tailored for generating passport credentials. It would encompass definitions of attributes like given name, family name, date of birth, passport number, and more. The versatility of a schema definition allows multiple credential issuers to utilize it, promoting standardization across various issuers.
##### Credential definition

Verifiable Credentials (VCs) are like digital certificates that follow standards, allowing you to securely share information online without revealing unnecessary details. These credentials are digital representations of identity info, cryptographically signed by issuers. They're used to confirm and validate various types of data in IDtech apps.When you receive a verifiable credential, it's stored in a secure digital wallet. This wallet is a software app with encryption, storing your credentials and keys needed for self-sovereign identity. It's easy to privately show these credentials to others when needed.

Once a schema has been authored and added to the ledger, it becomes accessible for use by a diverse range of credential issuers, such as banks, passport offices, universities, employers, and more. These issuers can then formulate issuer-specific credential definitions, which are also registered on the ledger. Each of these credential definitions constitutes an instance of the underlying schema, supplemented by attribute-specific public verification keys that are securely linked to the corresponding private signing keys of the respective issuer. This approach enables an issuer to re-use an existing schema, and enables a verifier who receives a proof containing data from the issuer to look up the issuer’s credential definition on Sovrin, obtain their verification key(s) and verify the origin and integrity of that data.

Verifiable credentials (VCs) have these qualities:
- Portability: You can easily send them to others online.
- Verifiability: You can check who issued the credential, who holds it, if it's unchanged, and if it's valid.
- Privacy: You can choose what info to share using zero-knowledge proofs, giving you more control.Integrity: VCs can't be changed or faked."

Verification credential Stakeholderds:
- Issuer: The entity that generates the Verifiable Credential and provides it to another entity.
- Holder: The entity that possesses the verifiable credential in their digital wallet.
- Verifier: The entity that gets and verifies instantly the shared information. 
##### Issuance and Verification

The platform implements a secure and consistent procedure for creating and distributing VCs, upholding the credibility and confidentiality of the credentials. It empowers trusted entities (like universities, employers, or government agencies) to issue VCs to individuals.Furthermore, the platform furnishes a means for individuals or entities relying on the credentials to authenticate and confirm the legitimacy of VCs provided by individuals. These entities could be employers, educational institutions, or any entity requiring validation of someone's qualifications or attributes.

##### Mobile Wallet for Holder

The platform acknowledges the importance of secure and user-centric digital wallets, granting users authority over their personal data. To fulfill this need, we've integrated non-custodial edge wallets into mobile applications. These wallets empower individuals to securely oversee their digital identities, credentials, and cryptographic keys on their mobile devices. The mobile app wallet is designed to be compatible with major operating systems, including iOS and Android, ensuring widespread accessibility across diverse user groups.

##### Identity Proofing





