// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import * as aws from "@pulumi/aws";

export class Bucket extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'replicatedbucket:index:Bucket';

    /**
     * Returns true if the given object is an instance of Bucket.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bucket {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bucket.__pulumiType;
    }

    /**
     * Bucket to which data should be replicated.
     */
    public /*out*/ readonly destinationBucket!: pulumi.Output<aws.s3.Bucket>;
    /**
     * Bucket to which objects are written.
     */
    public /*out*/ readonly sourceBucket!: pulumi.Output<aws.s3.Bucket>;

    /**
     * Create a Bucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BucketArgs, opts?: pulumi.ComponentResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.destinationRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationRegion'");
            }
            inputs["destinationRegion"] = args ? args.destinationRegion : undefined;
            inputs["destinationBucket"] = undefined /*out*/;
            inputs["sourceBucket"] = undefined /*out*/;
        } else {
            inputs["destinationBucket"] = undefined /*out*/;
            inputs["sourceBucket"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Bucket.__pulumiType, name, inputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Bucket resource.
 */
export interface BucketArgs {
    /**
     * Region to which data should be replicated.
     */
    readonly destinationRegion: pulumi.Input<string>;
}
