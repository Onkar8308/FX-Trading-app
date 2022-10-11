package com.finzly.assignment4.FXTrading.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "all_trades" , catalog = "fxtrading")
public class Client_detail_print {
	
	@Id
	@javax.persistence.GeneratedValue(strategy = GenerationType.IDENTITY)
	int tradeno;
	private String name;
	private String currencypair;
	private double amount;
	private double getrate;
	

	
	
	@Column
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	@Column
	public String getCurrencypair() {
		return currencypair;
	}
	public void setCurrencypair(String currencypair) {
		this.currencypair = currencypair;
	}
	
	@Column
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	@Column
	public double getGetrate() {
		return getrate;
	}
	public void setGetrate(double rate) {
		this.getrate = rate;
	}
	
	

}
