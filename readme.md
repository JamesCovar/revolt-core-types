# Changelog

## [1.0.15] - 2025-05-14

- Feat: Add ContactPerson type

## [1.0.14] - 2025-05-04

- Fix: Create GetFullCompany and GetFullPerson schema and types

## [1.0.13] - 2025-05-04

- Fix: Update Bank Schema, adds institutionName and country

## [1.0.12] - 2025-04-02

- Feat: Add DOCUMENT_SLOT_CATEGORIES and COMPANY_MEMBER_TYPE Enums

## [1.0.11] - 2025-03-21

- Fix: Change optional properties for nullables, schemas affected: [ADDRESS, PERSON, COMPANY]

## [1.0.6] - 2025-03-21

- Fix: Include Person and Company schema on CreateVendor type

## [1.0.5] - 2025-03-13

- Fix: Include personId | companyId inside CreateBank Schema
- Fix: Omit id insife CreateBank Schema

## [1.0.2] - 2025-03-13

- Determined optional schema properties
- Declared enums for VENDOR_TYPE ADDRESS_TYPE BANK_ACCOUNT_TYPE

## [1.0.1] - 2025-03-12

- Added secondary Zod schemas: Bank, Documents, and Company Members.
- Introduced CreateFullVendor Zod schema, providing a complete structure for vendor creation.

## [1.0.0] - 2025-03-11

- Project started 🎉.
- Added core Zod schemas: Vendor, Company, Person, and Address.
- Inferred TypeScript types from existing Zod schemas.
