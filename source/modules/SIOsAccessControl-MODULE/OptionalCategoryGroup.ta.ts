/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CategoryGroup,
    _decode_CategoryGroup,
    _encode_CategoryGroup,
} from "../SIOsAccessControl-MODULE/CategoryGroup.ta";
import {
    Operation,
    _decode_Operation,
    _encode_Operation,
} from "../SIOsAccessControl-MODULE/Operation.ta";
export {
    CategoryGroup,
    _decode_CategoryGroup,
    _encode_CategoryGroup,
} from "../SIOsAccessControl-MODULE/CategoryGroup.ta";
export {
    all /* IMPORTED_SHORT_NAMED_INTEGER */,
    oneOrMore /* IMPORTED_SHORT_NAMED_INTEGER */,
    onlyOne /* IMPORTED_SHORT_NAMED_INTEGER */,
    Operation,
    Operation_all /* IMPORTED_LONG_NAMED_INTEGER */,
    Operation_oneOrMore /* IMPORTED_LONG_NAMED_INTEGER */,
    Operation_onlyOne /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_Operation,
    _encode_Operation,
} from "../SIOsAccessControl-MODULE/Operation.ta";

/* START_OF_SYMBOL_DEFINITION OptionalCategoryGroup */
/**
 * @summary OptionalCategoryGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalCategoryGroup ::= SEQUENCE {
 *   operation      Operation,
 *   categoryGroup  CategoryGroup
 * }
 * ```
 *
 * @class
 */
export class OptionalCategoryGroup {
    constructor(
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: Operation,
        /**
         * @summary `categoryGroup`.
         * @public
         * @readonly
         */
        readonly categoryGroup: CategoryGroup
    ) {}

    /**
     * @summary Restructures an object into a OptionalCategoryGroup
     * @description
     *
     * This takes an `object` and converts it to a `OptionalCategoryGroup`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalCategoryGroup`.
     * @returns {OptionalCategoryGroup}
     */
    public static _from_object(
        _o: { [_K in keyof OptionalCategoryGroup]: OptionalCategoryGroup[_K] }
    ): OptionalCategoryGroup {
        return new OptionalCategoryGroup(_o.operation, _o.categoryGroup);
    }
}
/* END_OF_SYMBOL_DEFINITION OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalCategoryGroup */
/**
 * @summary The Leading Root Component Types of OptionalCategoryGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalCategoryGroup: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operation",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "categoryGroup",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalCategoryGroup */
/**
 * @summary The Trailing Root Component Types of OptionalCategoryGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalCategoryGroup: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalCategoryGroup */
/**
 * @summary The Extension Addition Component Types of OptionalCategoryGroup
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalCategoryGroup: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryGroup */
let _cached_decoder_for_OptionalCategoryGroup: $.ASN1Decoder<OptionalCategoryGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalCategoryGroup */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalCategoryGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalCategoryGroup} The decoded data structure.
 */
export function _decode_OptionalCategoryGroup(el: _Element) {
    if (!_cached_decoder_for_OptionalCategoryGroup) {
        _cached_decoder_for_OptionalCategoryGroup = function (
            el: _Element
        ): OptionalCategoryGroup {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OptionalCategoryGroup contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "operation";
            sequence[1].name = "categoryGroup";
            let operation!: Operation;
            let categoryGroup!: CategoryGroup;
            operation = _decode_Operation(sequence[0]);
            categoryGroup = _decode_CategoryGroup(sequence[1]);
            return new OptionalCategoryGroup(operation, categoryGroup);
        };
    }
    return _cached_decoder_for_OptionalCategoryGroup(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryGroup */
let _cached_encoder_for_OptionalCategoryGroup: $.ASN1Encoder<OptionalCategoryGroup> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalCategoryGroup */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalCategoryGroup */
/**
 * @summary Encodes a(n) OptionalCategoryGroup into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalCategoryGroup, encoded as an ASN.1 Element.
 */
export function _encode_OptionalCategoryGroup(
    value: OptionalCategoryGroup,
    elGetter: $.ASN1Encoder<OptionalCategoryGroup>
) {
    if (!_cached_encoder_for_OptionalCategoryGroup) {
        _cached_encoder_for_OptionalCategoryGroup = function (
            value: OptionalCategoryGroup,
            elGetter: $.ASN1Encoder<OptionalCategoryGroup>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Operation(
                            value.operation,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_CategoryGroup(
                            value.categoryGroup,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OptionalCategoryGroup(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalCategoryGroup */

/* eslint-enable */
