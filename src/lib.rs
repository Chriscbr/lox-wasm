mod utils;

use wasm_bindgen::prelude::*;

use lox_lib::run;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn run_code(code: &str) -> String {
    match run(code) {
        Ok(val) => val,
        Err(e) => "Error: ".to_string() + &e.to_string(),
    }
}
