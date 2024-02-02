// Declare the `deduct_near` module.
mod transfer_contract;

// Re-export the `Contract` struct so that it can be accessed from outside the crate.
pub use crate::transfer_contract::Contract;
