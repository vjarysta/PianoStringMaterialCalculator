Parameters:
- Density
	- Unit: g/cm^3
	- Description: Density of the string
	- Type: Float
- Price
	- Unit: euros
	- Description: For 1 meter, 1mm diameter
	- Type: Float
- Celerity
	- Unit: m/s
	- Type: Integer
- Hardness
	- Units:
		- Vickers (HV)
		- Brinell (HB)
	- Type: Float

Formulas:
- Density
	- Base: `8.96`
	- Multiplicator: `10`
	- Formula: `(input - base) * multiplicator`
- Price
	- Base: `178.73`
	- Multiplicator: `-0.01`
	- Formula: `(input - base) * multiplicator`
- Celerity
	- Base: `3570`
	- Multiplicator: `i`
	- Formula: `(input - base) * multiplicator`
- Hardness
	- Base: `87` HV
	- Multiplicator: `-0.1`
	- Formula: `abs(input - base) - multiplicator`
- **Total**
`density + price + celerity + hardness`
