import { Collateral, CreateOfferParams, Guarantor } from "@/api/loan";
import FileInput from "@/components/file-input";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import uploadToCloudinary from "@/util/upload-to-cloudinary";

type CollateralInputProps = {
    value: Collateral[0];
    applyData: Omit<CreateOfferParams, "userid" | "session">
    handleFieldChangeAndUpdate: (field: keyof Omit<CreateOfferParams, "userid" | "session">, value: string | number | Guarantor | Collateral) => void
    index: number;

}

function CollateralInput({ value, index, applyData, handleFieldChangeAndUpdate }: CollateralInputProps) {


    const handleChangeAtIndex = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFieldChangeAndUpdate('collaterals', applyData.collaterals.map((c, idx) => idx === index ? { ...c, item: e.target.value } : c))
    }

    const handleUpload = async (file: File, field?: keyof Omit<CreateOfferParams, "userid" | "session">, setLoading?: (loading: boolean) => void) => {
        const formData = new FormData();
        formData.append('file', file);
        setLoading && setLoading(true);
        try {
            const url = await uploadToCloudinary(file);
            handleFieldChangeAndUpdate('collaterals', applyData.collaterals.map((c, idx) => idx === index ? { ...c, proof_of_item: url } : c))
        } catch (error) {
            console.error(error);
        } finally {
            setLoading && setLoading(false);
        }
    }


    return (
        <>
            <div>
                <Label className="block pb-2" htmlFor="collateral">
                    Collateral *
                </Label>
                <Input id="collateral" value={value.item} onChange={(e) => handleChangeAtIndex(e)} placeholder="Enter collateral details" />
            </div>

            <FileInput
                id="collateral-proof-upload"
                title="Proof of Collateral (Pictures, receipts, range of documents for collateral) *"
                uploaded={!!applyData.collaterals[index].proof_of_item}
                acceptedFileTypes="image/*"
                field="collateral_proof"
                onUpload={handleUpload}
            />


        </>
    )
}

export default CollateralInput;
