/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";
import {
    EquivalentPolicies,
    _decode_EquivalentPolicies,
    _encode_EquivalentPolicies,
} from "../SIOsAccessControl-MODULE/EquivalentPolicies.ta";
import {
    ObjectIdData,
    _decode_ObjectIdData,
    _encode_ObjectIdData,
} from "../SIOsAccessControl-MODULE/ObjectIdData.ta";
import {
    SecurityClassifications,
    _decode_SecurityClassifications,
    _encode_SecurityClassifications,
} from "../SIOsAccessControl-MODULE/SecurityClassifications.ta";
import {
    SPIF_SecurityCategories,
    _decode_SPIF_SecurityCategories,
    _encode_SPIF_SecurityCategories,
} from "../SIOsAccessControl-MODULE/SPIF-SecurityCategories.ta";
import {
    UpdateInformationData,
    _decode_UpdateInformationData,
    _encode_UpdateInformationData,
} from "../SIOsAccessControl-MODULE/UpdateInformationData.ta";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VersionInformationData,
    _decode_VersionInformationData,
    _encode_VersionInformationData,
} from "../SIOsAccessControl-MODULE/VersionInformationData.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";
export {
    EquivalentPolicies,
    _decode_EquivalentPolicies,
    _encode_EquivalentPolicies,
} from "../SIOsAccessControl-MODULE/EquivalentPolicies.ta";
export {
    ObjectIdData,
    _decode_ObjectIdData,
    _encode_ObjectIdData,
} from "../SIOsAccessControl-MODULE/ObjectIdData.ta";
export {
    SecurityClassifications,
    _decode_SecurityClassifications,
    _encode_SecurityClassifications,
} from "../SIOsAccessControl-MODULE/SecurityClassifications.ta";
export {
    SPIF_SecurityCategories,
    _decode_SPIF_SecurityCategories,
    _encode_SPIF_SecurityCategories,
} from "../SIOsAccessControl-MODULE/SPIF-SecurityCategories.ta";
export {
    UpdateInformationData,
    _decode_UpdateInformationData,
    _encode_UpdateInformationData,
} from "../SIOsAccessControl-MODULE/UpdateInformationData.ta";
export {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    VersionInformationData,
    VersionInformationData_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_VersionInformationData,
    _encode_VersionInformationData,
} from "../SIOsAccessControl-MODULE/VersionInformationData.ta";

/* START_OF_SYMBOL_DEFINITION SPIF */
/**
 * @summary SPIF
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIF ::= SEQUENCE {
 *   versionInformation           VersionInformationData DEFAULT v1,
 *   updateInformation            UpdateInformationData,
 *   securityPolicyIdData         ObjectIdData,
 *   privilegeId                  OBJECT IDENTIFIER,
 *   rbacId                       OBJECT IDENTIFIER,
 *   securityClassifications      [0]  SecurityClassifications OPTIONAL,
 *   securityCategories           [1]  SPIF-SecurityCategories OPTIONAL,
 *   equivalentPolicies           [2]  EquivalentPolicies OPTIONAL,
 *   defaultSecurityPolicyIdData  [3]  ObjectIdData OPTIONAL,
 *   extensions                   [4]  Extensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SPIF {
    constructor(
        /**
         * @summary `versionInformation`.
         * @public
         * @readonly
         */
        readonly versionInformation: OPTIONAL<VersionInformationData>,
        /**
         * @summary `updateInformation`.
         * @public
         * @readonly
         */
        readonly updateInformation: UpdateInformationData,
        /**
         * @summary `securityPolicyIdData`.
         * @public
         * @readonly
         */
        readonly securityPolicyIdData: ObjectIdData,
        /**
         * @summary `privilegeId`.
         * @public
         * @readonly
         */
        readonly privilegeId: OBJECT_IDENTIFIER,
        /**
         * @summary `rbacId`.
         * @public
         * @readonly
         */
        readonly rbacId: OBJECT_IDENTIFIER,
        /**
         * @summary `securityClassifications`.
         * @public
         * @readonly
         */
        readonly securityClassifications: OPTIONAL<SecurityClassifications>,
        /**
         * @summary `securityCategories`.
         * @public
         * @readonly
         */
        readonly securityCategories: OPTIONAL<SPIF_SecurityCategories>,
        /**
         * @summary `equivalentPolicies`.
         * @public
         * @readonly
         */
        readonly equivalentPolicies: OPTIONAL<EquivalentPolicies>,
        /**
         * @summary `defaultSecurityPolicyIdData`.
         * @public
         * @readonly
         */
        readonly defaultSecurityPolicyIdData: OPTIONAL<ObjectIdData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a SPIF
     * @description
     *
     * This takes an `object` and converts it to a `SPIF`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPIF`.
     * @returns {SPIF}
     */
    public static _from_object(_o: { [_K in keyof SPIF]: SPIF[_K] }): SPIF {
        return new SPIF(
            _o.versionInformation,
            _o.updateInformation,
            _o.securityPolicyIdData,
            _o.privilegeId,
            _o.rbacId,
            _o.securityClassifications,
            _o.securityCategories,
            _o.equivalentPolicies,
            _o.defaultSecurityPolicyIdData,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `versionInformation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versionInformation() {
        return v1;
    }
}
/* END_OF_SYMBOL_DEFINITION SPIF */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPIF */
/**
 * @summary The Leading Root Component Types of SPIF
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPIF: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "versionInformation",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateInformation",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityPolicyIdData",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privilegeId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rbacId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityClassifications",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityCategories",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "equivalentPolicies",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "defaultSecurityPolicyIdData",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPIF */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPIF */
/**
 * @summary The Trailing Root Component Types of SPIF
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPIF: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPIF */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPIF */
/**
 * @summary The Extension Addition Component Types of SPIF
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPIF: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPIF */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIF */
let _cached_decoder_for_SPIF: $.ASN1Decoder<SPIF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIF */

/* START_OF_SYMBOL_DEFINITION _decode_SPIF */
/**
 * @summary Decodes an ASN.1 element into a(n) SPIF
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPIF} The decoded data structure.
 */
export function _decode_SPIF(el: _Element) {
    if (!_cached_decoder_for_SPIF) {
        _cached_decoder_for_SPIF = function (el: _Element): SPIF {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let versionInformation: OPTIONAL<VersionInformationData> =
                SPIF._default_value_for_versionInformation;
            let updateInformation!: UpdateInformationData;
            let securityPolicyIdData!: ObjectIdData;
            let privilegeId!: OBJECT_IDENTIFIER;
            let rbacId!: OBJECT_IDENTIFIER;
            let securityClassifications: OPTIONAL<SecurityClassifications>;
            let securityCategories: OPTIONAL<SPIF_SecurityCategories>;
            let equivalentPolicies: OPTIONAL<EquivalentPolicies>;
            let defaultSecurityPolicyIdData: OPTIONAL<ObjectIdData>;
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                versionInformation: (_el: _Element): void => {
                    versionInformation = _decode_VersionInformationData(_el);
                },
                updateInformation: (_el: _Element): void => {
                    updateInformation = _decode_UpdateInformationData(_el);
                },
                securityPolicyIdData: (_el: _Element): void => {
                    securityPolicyIdData = _decode_ObjectIdData(_el);
                },
                privilegeId: (_el: _Element): void => {
                    privilegeId = $._decodeObjectIdentifier(_el);
                },
                rbacId: (_el: _Element): void => {
                    rbacId = $._decodeObjectIdentifier(_el);
                },
                securityClassifications: (_el: _Element): void => {
                    securityClassifications = $._decode_implicit<SecurityClassifications>(
                        () => _decode_SecurityClassifications
                    )(_el);
                },
                securityCategories: (_el: _Element): void => {
                    securityCategories = $._decode_implicit<SPIF_SecurityCategories>(
                        () => _decode_SPIF_SecurityCategories
                    )(_el);
                },
                equivalentPolicies: (_el: _Element): void => {
                    equivalentPolicies = $._decode_implicit<EquivalentPolicies>(
                        () => _decode_EquivalentPolicies
                    )(_el);
                },
                defaultSecurityPolicyIdData: (_el: _Element): void => {
                    defaultSecurityPolicyIdData = $._decode_implicit<ObjectIdData>(
                        () => _decode_ObjectIdData
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPIF,
                _extension_additions_list_spec_for_SPIF,
                _root_component_type_list_2_spec_for_SPIF,
                undefined
            );
            return new SPIF /* SEQUENCE_CONSTRUCTOR_CALL */(
                versionInformation,
                updateInformation,
                securityPolicyIdData,
                privilegeId,
                rbacId,
                securityClassifications,
                securityCategories,
                equivalentPolicies,
                defaultSecurityPolicyIdData,
                extensions
            );
        };
    }
    return _cached_decoder_for_SPIF(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPIF */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIF */
let _cached_encoder_for_SPIF: $.ASN1Encoder<SPIF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIF */

/* START_OF_SYMBOL_DEFINITION _encode_SPIF */
/**
 * @summary Encodes a(n) SPIF into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPIF, encoded as an ASN.1 Element.
 */
export function _encode_SPIF(value: SPIF, elGetter: $.ASN1Encoder<SPIF>) {
    if (!_cached_encoder_for_SPIF) {
        _cached_encoder_for_SPIF = function (
            value: SPIF,
            elGetter: $.ASN1Encoder<SPIF>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.versionInformation ===
                            undefined ||
                        $.deepEq(
                            value.versionInformation,
                            SPIF._default_value_for_versionInformation
                        )
                            ? undefined
                            : _encode_VersionInformationData(
                                  value.versionInformation,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_UpdateInformationData(
                            value.updateInformation,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ObjectIdData(
                            value.securityPolicyIdData,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.privilegeId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.rbacId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.securityClassifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SecurityClassifications,
                                  $.BER
                              )(value.securityClassifications, $.BER),
                        /* IF_ABSENT  */ value.securityCategories === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SPIF_SecurityCategories,
                                  $.BER
                              )(value.securityCategories, $.BER),
                        /* IF_ABSENT  */ value.equivalentPolicies === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EquivalentPolicies,
                                  $.BER
                              )(value.equivalentPolicies, $.BER),
                        /* IF_ABSENT  */ value.defaultSecurityPolicyIdData ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ObjectIdData,
                                  $.BER
                              )(value.defaultSecurityPolicyIdData, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_Extensions,
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPIF(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPIF */

/* eslint-enable */
