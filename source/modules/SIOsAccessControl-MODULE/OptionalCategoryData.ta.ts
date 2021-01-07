/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CatData } from "../SIOsAccessControl-MODULE/CatData.osa";
export { OC_DATA } from "../SIOsAccessControl-MODULE/OC-DATA.oca";

/* START_OF_SYMBOL_DEFINITION OptionalCategoryData */
/**
 * @summary OptionalCategoryData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalCategoryData ::= SEQUENCE {
 *   optCatDataId  OC-DATA.&id({CatData}),
 *   categorydata  OC-DATA.&Type({CatData}{@optCatDataId})
 * }
 * ```
 *
 * @class
 */
export class OptionalCategoryData {
    constructor(
        /**
         * @summary `optCatDataId`.
         * @public
         * @readonly
         */
        readonly optCatDataId: OBJECT_IDENTIFIER,
        /**
         * @summary `categorydata`.
         * @public
         * @readonly
         */
        readonly categorydata: _Element
    ) {}

    /**
     * @summary Restructures an object into a OptionalCategoryData
     * @description
     *
     * This takes an `object` and converts it to a `OptionalCategoryData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalCategoryData`.
     * @returns {OptionalCategoryData}
     */
    public static _from_object(
        _o: { [_K in keyof OptionalCategoryData]: OptionalCategoryData[_K] }
    ): OptionalCategoryData {
        return new OptionalCategoryData(_o.optCatDataId, _o.categorydata);
    }
}
/* END_OF_SYMBOL_DEFINITION OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalCategoryData */
/**
 * @summary The Leading Root Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalCategoryData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "optCatDataId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "categorydata",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalCategoryData */
/**
 * @summary The Trailing Root Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalCategoryData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalCategoryData */
/**
 * @summary The Extension Addition Component Types of OptionalCategoryData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalCategoryData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryData */
let _cached_decoder_for_OptionalCategoryData: $.ASN1Decoder<OptionalCategoryData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalCategoryData */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalCategoryData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalCategoryData} The decoded data structure.
 */
export function _decode_OptionalCategoryData(el: _Element) {
    if (!_cached_decoder_for_OptionalCategoryData) {
        _cached_decoder_for_OptionalCategoryData = function (
            el: _Element
        ): OptionalCategoryData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OptionalCategoryData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "optCatDataId";
            sequence[1].name = "categorydata";
            let optCatDataId!: OBJECT_IDENTIFIER;
            let categorydata!: _Element;
            optCatDataId = $._decodeObjectIdentifier(sequence[0]);
            categorydata = $._decodeAny(sequence[1]);
            return new OptionalCategoryData(optCatDataId, categorydata);
        };
    }
    return _cached_decoder_for_OptionalCategoryData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryData */
let _cached_encoder_for_OptionalCategoryData: $.ASN1Encoder<OptionalCategoryData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryData */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalCategoryData */
/**
 * @summary Encodes a(n) OptionalCategoryData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalCategoryData, encoded as an ASN.1 Element.
 */
export function _encode_OptionalCategoryData(
    value: OptionalCategoryData,
    elGetter: $.ASN1Encoder<OptionalCategoryData>
) {
    if (!_cached_encoder_for_OptionalCategoryData) {
        _cached_encoder_for_OptionalCategoryData = function (
            value: OptionalCategoryData,
            elGetter: $.ASN1Encoder<OptionalCategoryData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.optCatDataId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.categorydata,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OptionalCategoryData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalCategoryData */

/* eslint-enable */
