use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, AccountId, Promise};

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Contract {}

#[near_bindgen]
impl Contract {
    #[payable]
    pub fn deduct_near(&mut self, recipient_id: AccountId, amount: u128) {
        assert!(env::attached_deposit() >= amount, "Insufficient deposit attached");

        // Clone `recipient_id` before passing it to `Promise::new`.
        let recipient_id_clone = recipient_id.clone();
        Promise::new(recipient_id_clone).transfer(amount);

        // Use the original `recipient_id` for logging.
        env::log_str(&format!("Transferred {} yoctoNEAR to {}", amount, recipient_id));
    }
}
