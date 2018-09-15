import mongoose, { Schema } from 'mongoose'

const writeSmartSchema = new Schema({
  id_smart: {
    type: String
  },
  data: {
    type: Schema.Types.Mixed
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

writeSmartSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id_smart: this.id_smart,
      data: this.data,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('WriteSmart', writeSmartSchema)

export const schema = model.schema
export default model
