// Declare the `deduct_near` module.
mod deduct_near;

// Re-export the `Contract` struct so that it can be accessed from outside the crate.
pub use crate::deduct_near::Contract;
