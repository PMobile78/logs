const {gql} = require('genesis-libs')

module.exports = gql` 
     extend type Query {      
          nameUpdatedDate: Int,
          emailUpdatedDate: Int,
          paymentMethodByDate(date: Int!): PaymentMethodInfo!
     }    
     
     type PaymentMethodInfo {
          paymentMethod: String!,
          accountId: String,
          bankDetails: String,
          bankInformation: BankInformation,
          beneficiaryInformation: [BeneficiaryInformation],
          intermediaryBankInformation: IntermediaryBankInformation,
     }

     type BankInformation {
         name: String!,
         addressLine1: String!,
         addressLine2: String,
         city: String!,
         countryCode: String!,
         zipCode: String,
         state: String,
         swiftCode: String!,
         abaRoutingNumber: String,
         accountNumberOrIban: String!
     }     
     
     type BeneficiaryInformation {
         name: String!,
         addressLine1: String!,
         addressLine2: String,
         city: String!,
         countryCode: String,
         zipCode: String,
         state: String
     }
     
     type IntermediaryBankInformation {
         name: String!,
         addressLine1: String!,
         addressLine2: String,
         city: String!,
         countryCode: String!,
         zipCode: String,
         state: String,
         swiftCode: String!,
         abaRoutingNumber: String,
         accountNumberOrIban: String!
     }
     `