export const useContractStore = defineStore('contract', () => {
    const contracts = ref([{
        "Id": "6FB959FB-9D1C-4104-B9DF-A48DD5E266F1",
        "ProjectId": 7000,
        "ContractNO": "HD03",
        "InternalContractNO": "HD03",
        "ExternalContractNO": "E-HD03",
        "Title": "Hợp đồng 3",
        "ContractType": "Internal Contract-SGX",
        "ContractValue": 1000,
        "Currency": "VND",
        "SignedDate": "2022-08-14",
        "DurationDays": 10,
        "StartDate": null,
        "FinishDate": null,
        "Quotations": null,
        "Description": "<p>Test</p>\n",
        "PaymentGuarantee": "Yes",
        "PaymentGuaranteeEDate": "2023-04-30",
        "PaymentGuaranteeNote": "Bảo lãnh thanh toán: 30% giá trị Hợp đồng + có hiệu lực từ ngày phát hành đến 60 ngày sau Ngày hoàn thành; được mở thành 02 đợt<br/>* Đợt 1: 20% giá trị Hợp đồng ; mở không trễ hơn ngày 30/04/2023<br/>* Đợt 1: 1% giá trị Hợp đồng ; mở không trễ hơn ngày 30/05/2023",
        "DetailBOQApproval": "Yes",
        "CreatedBy": "TTT\\Anh.TT",
        "CreatedOn": "2019-08-14T02:30:16.243Z",
        "ModifiedBy": "TTT\\Anh.TT",
        "ModifiedOn": "2023-04-03T10:06:23.977Z",
    }, {
        "Id": "D039AF59-64E2-4B30-966A-456FB3D63EC7",
        "ProjectId": 7000,
        "ContractNO": "HD02",
        "InternalContractNO": "HD02",
        "ExternalContractNO": "E-HD02",
        "Title": null,
        "ContractType": "\r\nVO (Variation Order)",
        "ContractValue": 10000,
        "Currency": "VND",
        "SignedDate": "2022-07-26",
        "DurationDays": null,
        "StartDate": null,
        "FinishDate": null,
        "Quotations": null,
        "Description": "<p>Test</p>\n",
        "PaymentGuarantee": null,
        "PaymentGuaranteeEDate": null,
        "PaymentGuaranteeNote": null,
        "DetailBOQApproval": null,
        "CreatedBy": "TTT\\Anh.TT",
        "CreatedOn": "2019-07-25T03:04:49.757Z",
        "ModifiedBy": "TTT\\Anh.TT",
        "ModifiedOn": "2019-07-25T03:04:49.757Z",
    }, {
        "Id": "8FE934A1-DBF6-4A84-92EF-CA9C585D4260",
        "ProjectId": 7000,
        "ContractNO": "HD01",
        "InternalContractNO": "HD01",
        "ExternalContractNO": "E-HD01",
        "Title": null,
        "ContractType": "Contract",
        "ContractValue": 1000000,
        "Currency": "VND",
        "SignedDate": "2022-07-25",
        "DurationDays": null,
        "StartDate": null,
        "FinishDate": null,
        "Quotations": null,
        "Description": "<p>Test</p>\n",
        "PaymentGuarantee": null,
        "PaymentGuaranteeEDate": null,
        "PaymentGuaranteeNote": null,
        "DetailBOQApproval": null,
        "CreatedBy": "TTT\\Anh.TT",
        "CreatedOn": "2019-07-25T03:03:38.303Z",
        "ModifiedBy": "TTT\\Anh.TT",
        "ModifiedOn": "2019-08-14T02:28:35.070Z",
    }])

    /**
     * AnhTranTuan 2023-03-10.
     * Get Contract by Id.
     * @param {String} id - Required
     * @returns {Contract} contract
     */
    function getContract(id) {
        return (contracts.value || []).find(c => c && `${c.Id || ''}`.trim().toLowerCase() === `${id || ''}`.trim().toLowerCase())
    }

    /**
     * AnhTranTuan 2023-03-10.
     * Add contract to contract list.
     * @param {Contract} contract - Required
     */
    function addContract(value) {
        contracts.value = contracts.value || [];
        contracts.value.push(value)
    }

    /**
     * AnhTranTuan 2023-03-10.
     * Update contract by Id
     * @param {String} id - Required
     * @param {Contract} value - Required
     * @returns {Contract} contract
     */
    function updateContract(id, value) {
        const contractIdx = (contracts.value || []).findIndex(c => c && `${c.Id || ''}`.trim().toLowerCase() === `${id || ''}`.trim().toLowerCase());
        if (contractIdx < 0) return null;

        contracts.value[contractIdx] = { ...contracts.value[contractIdx], ...value }
        return contracts.value[contractIdx]
    }

    /**
     * AnhTranTuan 2023-03-10.
     * Delete Contract by Id.
     * @param {String} id - Required
     */
    function deleteContract(id) {
        const contractIdx = (contracts.value || []).findIndex(c => c && `${c.Id || ''}`.trim().toLowerCase() === `${id || ''}`.trim().toLowerCase());
        if (contractIdx < 0) return;

        contracts.value.splice(contractIdx, 1);
    }

    return { contracts, getContract, addContract, updateContract, deleteContract }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useContractStore, import.meta.hot));
}