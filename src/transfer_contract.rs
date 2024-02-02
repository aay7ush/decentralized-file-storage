use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, AccountId, Promise, Balance};

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Contract {}

#[near_bindgen]
impl Contract {
    pub fn transfer(&mut self, recipient_id: AccountId, amount: Balance) -> Promise {
        // Only allow this action if the contract has enough balance
        if env::account_balance() < amount {
            env::panic_str("The contract does not have enough balance");
        }
        // Transfer the specified amount to the recipient
        Promise::new(recipient_id).transfer(amount)
    }
}

