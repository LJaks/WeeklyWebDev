function domainType(domains) {
    //  write code here.
    let array = [];
    for (let i = 0; i < domains.length; i++) {
        domain = domains[i].split(".");
        type = domain[domain.length - 1];
        switch(type) {
            case "org":
               array.push("organization");
               break;
            case "com":
               array.push("commercial");
               break;
            case "net": 
               array.push("network");
               break;
             case "info":
               array.push("information");
               break;
        };
    }
  return array;  
}

/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});