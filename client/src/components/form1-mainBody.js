import React from "react";
import "./combined.css"

const FormMainBody =()=>{
return (
<div>
 <div class="topline">
		<p class="line1">Sell Your Household waste in 2 easy steps</p>
	</div>
 <div class="container ">
		<div class="container-fluid p-5 col"></div>
		<div class="step1text-div">
		<h1 class="step1text">Select Waste Type</h1>
		</div>
									
			<button type="button" class="btn_choose_sent bg_btn_chose_1 custom-btn-radio_1">
				<input type="radio" name="name" />Paper 📰
			</button>
			<button type="button" class="btn_choose_sent bg_btn_chose_2 custom-btn-radio_2">
				<input type="radio" name="name" />Plastic 🛍️
			</button>
			<button type="button" class="btn_choose_sent bg_btn_chose_3 custom-btn-radio_3">
				<input type="radio" name="name" />Glass 🍶
			</button>
			<button type="button" class="btn_choose_sent bg_btn_chose_4 custom-btn-radio_4">
				<input type="radio" name="name" />Metal ⚙️
			</button>
			<button type="button" class="btn_choose_sent bg_btn_chose_5 custom-btn-radio_5">
				<input type="radio" name="name" />Everything 🗑️
			</button>
<div class="step2text-div">
<h1 class="step2text">Select Redeem Method</h1>
</div>
			<button type="button" class="btn_choose_sent bg_btn_chose_6 custom-btn-radio_6">
				<input type="radio" name="choose" />Vouchers 🎫
			</button>
			<button type="button" class="btn_choose_sent bg_btn_chose_7 custom-btn-radio_7">
				<input type="radio" name="choose" />Cash 💲
			</button>

	</div>
</div>
);
}
export default FormMainBody;