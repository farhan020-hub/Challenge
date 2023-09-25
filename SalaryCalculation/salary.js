function calculateNetSalary(basicSalary, benefits) {

    // Constants for tax rates and deductions from the provided website's link
    const kraTaxRate = 0.3;
    const nssfRate = 0.06;


      // NHIF rates based on the provided table in the website
    const nhifRate = [
        { minGross: 0, maxGross: 5999, deduction: 150 },
        { minGross: 6000, maxGross: 7999, deduction: 300 },
        { minGross: 8000, maxGross: 11999, deduction: 400 },
        { minGross: 12000, maxGross: 14999, deduction: 500 },
        { minGross: 15000, maxGross: 19999, deduction: 600 },
        { minGross: 20000, maxGross: 24999, deduction: 750 },
        { minGross: 25000, maxGross: 29999, deduction: 850 },
        { minGross: 30000, maxGross: 34999, deduction: 900 },
        { minGross: 35000, maxGross: 39999, deduction: 950 },
        { minGross: 40000, maxGross: 44999, deduction: 1000 },
        { minGross: 45000, maxGross: 49999, deduction: 1100 },
        { minGross: 50000, maxGross: 59999, deduction: 1200 },
        { minGross: 60000, maxGross: 69999, deduction: 1300 },
        { minGross: 70000, maxGross: 79999, deduction: 1400 },
        { minGross: 80000, maxGross: 89999, deduction: 1500 },
        { minGross: 90000, maxGross: 99999, deduction: 1600 },
        { minGross: 100000, maxGross: Infinity, deduction: 1700 }
    ];

     // Calculate gross salary
     const grossSalary = basicSalary + benefits;
    

    // Calculate NHIF Deduction based on gross salary
    let nhifDeduction = 0;
    for (const rate of nhifRate) {
        if (grossSalary >= rate.minGross && grossSalary <= rate.maxGross) {
            nhifDeduction = rate.deduction;
        
        }
    }
   

  

    // Calculate KRA Tax
    const taxAmount = grossSalary * kraTaxRate;

   
    // Calculate NSSF Deductions 
    const nssfDeduction = basicSalary * nssfRate;

    // Calculate total deductions
    const totalDeduction = taxAmount + nhifDeduction + nssfDeduction;
   

    // Calculate net salary
    const netSalary = grossSalary - totalDeduction;

    return {
       
        taxAmount,
        nhifDeduction,
        nssfDeduction,
        totalDeduction, 
        netSalary,
    };
}

module.exports = calculateNetSalary;
