import mongoose, {Schema, Document} from "mongoose";

interface ILiquors extends Document {
  
    nameLiquors: string;
    commentLiquors: string;
    priceLiquors: number;
}

const liquorsSchema = new Schema<ILiquors>({
   
    nameLiquors: {type: String, required: true},
    commentLiquors: {type: String, required: false},
    priceLiquors: {type: Number, required: true},
});

export default mongoose.model<ILiquors>("Liqour", liquorsSchema);